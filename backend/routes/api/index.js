const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const typeRouter = require('./types');
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/types', typeRouter);

module.exports = router;
