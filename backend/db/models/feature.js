'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    spotId: DataTypes.INTEGER,
    feature: DataTypes.STRING
  }, {});
  Feature.associate = function(models) {
    Feature.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Feature;
};
