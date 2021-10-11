const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot, Type, Image } = require('../../db/models');
const e = require('express');
const router = express.Router();



router.get('/:id/spots', asyncHandler( async (req, res) => {
    const typeId = +req.params.id;
    let spots = await Spot.findAll({where: {typeId}, include: [Type, Image]});
    for (let i = 0; i < spots.length; i++){
        spots[i] = spots[i].dataValues;
        spots[i].Type = spots[i].Type.dataValues.type
        let images = await Image.findAll({where: {spotId: spots[i].id}});
        images.map(e => e.dataValues);
        spots[i].images = images;
    }
    res.json({'data': spots})
}))


module.exports = router;
