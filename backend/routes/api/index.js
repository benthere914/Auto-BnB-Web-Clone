const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const typeRouter = require('./types');
const spotRouter = require('./spot');
const reviewRouter = require('./review')
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/types', typeRouter);
router.use('/spots', spotRouter);
router.use('/reviews', reviewRouter);

module.exports = router;
