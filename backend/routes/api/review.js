const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Review } = require('../../db/models');
const router = express.Router();


router.post('/', asyncHandler(async (req, res) => {
    const {spotId, userId, review} = req.body;
    if (!userId){
        res.json({error: 'must be logged in'});
        return;
    }
    const newReview = await Review.create({spotId, userId, review})
    const reviews = await Review.findAll({where: {spotId}, order: [['updatedAt', 'DESC']]});
    for (let i = 0; i < reviews.length; i++){
        reviews[i] = reviews[i].dataValues;
        let author = await User.findByPk(reviews[i].userId);
        author = {id: author.dataValues.id, username: author.dataValues.username, email: author.dataValues.email};
        reviews[i].author = author;
    }
    res.json({reviews})
}))

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    let review = await Review.findByPk(req.params.id);
    let spotId = review.dataValues.spotId;
    await review.destroy();
    let reviews = await Review.findAll({where: {spotId}, order: [['updatedAt', 'DESC']]});
    for (let i = 0; i < reviews.length; i++){
        reviews[i] = reviews[i].dataValues;
        let author = await User.findByPk(reviews[i].userId);
        author = {id: author.dataValues.id, username: author.dataValues.username, email: author.dataValues.email};
        reviews[i].author = author;
    }
    console.log(reviews)
    res.json({reviews})
}))

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    let review = await Review.findByPk(req.params.id);
    review.review = req.body.review;
    await review.save();
    let reviews = await Review.findAll({where: {spotId: review.dataValues.spotId}, order: [['updatedAt', 'DESC']]});
    for (let i = 0; i < reviews.length; i++){
        reviews[i] = reviews[i].dataValues;
        let author = await User.findByPk(reviews[i].userId);
        author = {id: author.dataValues.id, username: author.dataValues.username, email: author.dataValues.email};
        reviews[i].author = author;
    }
    res.json({reviews})
}))



module.exports = router
