// import router
const router = require('express').Router();

// import api route files
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');

// set up and prepend api routes from imported files
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

// export packaged routes
module.exports = router;
