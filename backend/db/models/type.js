'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING
  }, {});
  Type.associate = function(models) {
    Type.hasMany(models.Spot, { foreignKey: 'typeId'})
  };
  return Type;
};
