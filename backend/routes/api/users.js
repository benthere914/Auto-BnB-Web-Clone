const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');
const router = express.Router();
const validateSignup = [
	check('email')
		.exists({ checkFalsy: true })
        .withMessage('Email cannot be empty')
		.isEmail()
		.withMessage('Please provide a valid email.'),
	check('username')
		.exists({ checkFalsy: true })
        .withMessage('Username cannot be empty')
		.isLength({ min: 4 })
		.withMessage('Please provide a username with at least 4 characters.'),
	check('username')
		.not()
		.isEmail()
		.withMessage('Username cannot be an email.'),
	check('password')
		.exists({ checkFalsy: true })
        .withMessage('Password cannot be empty.')
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters or more.'),
	handleValidationErrors,
];
router.post('/', validateSignup, asyncHandler(async (req, res) => {
		const { email, password, username } = req.body;
		const user = await User.signup({ email, username, password });
		await setTokenCookie(res, user);
		return res.json({ user });
	})
);


router.put('/:id', asyncHandler(async (req, res) => {
    console.log('in the route')
    console.log(req.body);
    res.json({'message': 'this is a test'})
}))

module.exports = router;
