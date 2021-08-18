const router = require('express').Router();
const apiRoutes = require('./api');
// use of home - routes
const homeRoutes = require('./home_routes');
//use of account routes
const accountRouter = require('./account_routes');

router.use('/', homeRoutes);

router.use('/account', accountRouter);

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;