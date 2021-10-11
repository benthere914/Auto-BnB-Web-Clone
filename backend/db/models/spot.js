'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.Type, {foreignKey: 'typeId'});
    Spot.hasMany(models.Image, {foreignKey: 'spotId'});
    Spot.belongsToMany(models.User, {through: 'Review', otherKey: 'userId', foreignKey: 'spotId'})
    Spot.belongsToMany(models.User, {through: 'Booking', otherKey: 'userId', foreignKey: 'spotId'})

  };
  return Spot;
};
