const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const typeRouter = require('./types');
const spotRouter = require('./spot');
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/types', typeRouter);
router.use('/spots', spotRouter)

module.exports = router;
