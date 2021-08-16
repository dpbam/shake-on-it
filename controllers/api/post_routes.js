const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Rating, Comment, State, City } = require('../../models');
const withAuth = require('../../utils/auth');

//get all users
router.get('/', (req, res) => {
    Post.findAll({
        //Query configuration
        attributes: [
            'id', 'content', 'title', 'state_id', 'city_id', 'created_at',
            [sequelize.literal(`(SELECT AVG(star_rating) FROM rating WHERE post.id = rating.post_id)`), 'rating_score']
        ],
        order: [['created_at', 'DESC']],
        include: [
            //inclue the Comment model here
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: State,
                attributes: ['state']
            },
            {
                model: City,
                attributes: ['city']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get single post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 'content', 'title', 'state_id', 'city_id', 'created_at',
            [sequelize.literal(`(SELECT AVG(star_rating) FROM rating WHERE user.id = rating.user_id)`), 'rating_score']
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
                model: State,
                attributes: ['state']
            },
            {
                model: City,
                attributes: ['city']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
        state_id: req.body.state_id,
        city_id: req.body.city_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT /api/posts/rating
router.put('/rating', withAuth, (req, res) => {
    //make sure the session exists first
    if (req.session) {
        //custom static method created in models/Post.js
        //pass session id along with all destructured properties on req.body
        Post.rating({ ...req.body, user_id: req.session.user_id }, { Rating, Comment, User, State, City })
            .then(updatedPostData => res.json(updatedPostData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title,
            content: req.body.content,
            state_id: req.body.state_id,
            city_id: req.body.city_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;