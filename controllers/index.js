const router = require('express').Router();
const apiRoutes = require('./api');

//use of home-routes
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
// const homeRoutes = require('./home-routes');
// //use of dashboard-route
// const dashboardRouter = require('./dashboard-routes');

// router.use('/', homeRoutes);

// router.use('/dashboard', dashboardRouter);

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;