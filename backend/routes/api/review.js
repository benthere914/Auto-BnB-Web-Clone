const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Review } = require('../../db/models');
const router = express.Router();


router.post('/', asyncHandler(async (req, res) => {
    const {spotId, userId, review} = req.body;
    const newReview = await Review.create({spotId, userId, review})
    console.log(req.body);
    const reviews = await Review.findAll({where: {spotId}});
    console.log(reviews)
    reviews.map(e => e.dataValues)
    res.json({reviews})
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    let review = await Review.findByPk(req.params.id);
    let spotId = review.dataValues.spotId;
    await review.destroy();
    let reviews = Review.findAll({where: {spotId}});
    res.json({reviews})
}))



module.exports = router
