const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Rating, City, State } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id', 'title', 'content', 'created_at', 'state_id', 'city_id',
            [
                sequelize.literal(
                    `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
                ),
                "rating_score",
            ],
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: City,
                attributes: ['city']
            },
            {
                model: State,
                attributes: ['state']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('account-page', { posts, loggedIn: true });
        })
        .catch(err => res.status(500).json(err));
})

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 'title', 'content', 'created_at', 'state_id', 'city_id',
            [
                sequelize.literal(
                    `(SELECT AVG(num_rating) FROM rating WHERE post.id = rating.post_id)`
                ),
                "rating_score",
            ],
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: City,
                attributes: ['city']
            },
            {
                model: State,
                attributes: ['state']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });

            res.render('edit_post', { post, loggedIn: true });
        })
        .catch(err => res.status(500).json(err));
})

module.exports = router;