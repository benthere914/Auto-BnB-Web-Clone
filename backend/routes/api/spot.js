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
    let reviews = await Review.findAll({where: {spotId}, order: [['updatedAt', 'DESC']]});
        for (let i = 0; i < reviews.length; i++){
            reviews[i] = reviews[i].dataValues;
            let author = await User.findByPk(reviews[i].userId);
            author = {id: author.dataValues.id, username: author.dataValues.username, email: author.dataValues.email};
            reviews[i].author = author;
        }
        console.log(reviews[0])
    res.json({reviews})
}))

router.post('/', asyncHandler(async (req, res) => {
    let { userId, title, description, mileage, year, pricePerDay, type, features, urls} = req.body;
    const errors = {};
    mileage = +mileage;
    year = +year;
    pricePerDay = +pricePerDay;
    const createdAt = new Date();
    const updatedAt = new Date();
    if (!title.trim().length){errors['title'] = ('Title can not be empty')}
    if (!description.trim().length){errors['description'] = ('Description can not be empty')}
    if (Number.isNaN(mileage) || mileage <= 0){errors['mileage'] = ('Mileage must be a vaild number')}
    if (Number.isNaN(year) || year < 1850 || year > 2022){errors['year'] = ('Year must be a valid year')}
    if (Number.isNaN(pricePerDay) || pricePerDay < 0 || !(pricePerDay)){errors['price'] = ('Price must be a valid price')}
    if (Number.isNaN(type) || type === 0 || type < 0 || type > 6){errors['type'] = ('Type must be a valid type')}
    if (features.length < 3){errors['features'] = ('Must Contain at least 3 features')}

    let filteredUrls = urls.filter((e) =>  (e !== '' && e.startsWith('http')));
    console.log(urls)
    if (filteredUrls.length > 3){errors['urls'] = ('Must have at least 3 photos')}
    if (Object.entries(errors).length){console.log(errors);return res.json({'errors' : errors})}
    const newSpot = await Spot.create({ownerId: userId, title, description, mileage, year, pricePerDay, typeId: type, createdAt, updatedAt })
    let spotId = newSpot.id;
    for (let i = 0; i < features.length; i++){
        let newFeature = await Feature.create({spotId, feature: features[i], createdAt, updatedAt})
    }
    for (let j = 0; j < urls.length; j++){
        let newImage = await Image.create({url: urls[j], alt: title, spotId, createdAt, updatedAt})
    }
    res.json({'message': 'passed', spotId});
}))

module.exports = router;
