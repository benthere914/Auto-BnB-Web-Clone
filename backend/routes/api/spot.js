const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot, Image, Feature, Review, Type } = require('../../db/models');
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = +req.params.id;
    let spot = await Spot.findOne({where: {id}});
    spot = spot.dataValues;
    console.log(spot.typeId)
    let type = await Type.findByPk(spot.typeId);
    type = type.dataValues.type;
    let ownerId = spot.ownerId;
    let title = spot.title;
    let author = await User.findByPk(ownerId);
    let description = spot.description;
    let pricePerDay = spot.pricePerDay;
    let mileage = spot.mileage;
    let year = spot.year;
    let images = await Image.findAll({where: {spotId: id}}).map((e) => { return {url: e.dataValues.url, alt: e.dataValues.alt}});
    let mainImage = images[0];
    let features = await Feature.findAll({where: {spotId: id}}).map(e => e.dataValues.feature);
    res.json({'data': {ownerId, title, author, description, pricePerDay, mileage, year, images, mainImage, features, type}})
}))

router.get('/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    const spotId = +req.params.id;
    let reviews = await Review.findAll({where: {spotId}});
        for (let i = 0; i < reviews.length; i++){
            reviews[i] = reviews[i].dataValues;
            let author = await User.findByPk(reviews[i].userId);
            author = {id: author.dataValues.id, username: author.dataValues.username, email: author.dataValues.email};
            reviews[i].author = author;
        }
        console.log(reviews[0])
    res.json({reviews})
}))

module.exports = router;
