const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot, Type, Image, Feature } = require('../../db/models');
const e = require('express');
const feature = require('../../db/models/feature');
const router = express.Router();



router.get('/:id/spots', asyncHandler( async (req, res) => {
    const typeId = +req.params.id;
    let result = [];
    let spots = await Spot.findAll({where: {typeId}, include: [Type]});
    for (let i = 0; i < spots.length; i++){
        spots[i] = spots[i].dataValues;
        let spotId = spots[i].id;
        let ownerId = spots[i].ownerId;
        let title = spots[i].title;
        let user = await User.findOne({where: {id: ownerId}});
        let author = user.username
        let description = spots[i].description;
        let type = spots[i].Type.dataValues.type;
        let pricePerDay = spots[i].pricePerDay;
        let mileage = spots[i].mileage;
        let year = spots[i].year;
        let images = await Image.findAll({where: {spotId}}).map((e) => { return {url: e.dataValues.url, alt: e.dataValues.alt}});
        let mainImage = images[0];
        let features = await Feature.findAll({where: {spotId}}).map(e => e.dataValues.feature);
        let mainFeatures = features.slice(0, 3);
        result.push({spotId, ownerId, title, author, description, type, pricePerDay, mileage, year, images, mainImage, features, mainFeatures})
    }
    res.json({'data': result})
}))


module.exports = router;
