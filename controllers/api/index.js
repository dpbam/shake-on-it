const router = require('express').Router();
const userRoutes = require('./user_routes.js');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');
const barterRoutes = require('./barter_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/barters', barterRoutes);

module.exports = router;