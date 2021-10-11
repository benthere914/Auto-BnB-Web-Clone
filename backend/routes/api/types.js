const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User, Spot } = require('../../db/models');
const e = require('express');
const router = express.Router();



router.get('/:id/spots', asyncHandler( async (req, res) => {
    const typeId = +req.params.id;
    let spots = await Spot.findAll({where: {typeId}});
    spots = spots.map((e) => e.dataValues)
    console.log(spots);
    res.json({'data': spots})

}))


module.exports = router;
