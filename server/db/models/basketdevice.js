'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
   
    static associate(models) {
      BasketDevice.hasMany(models.Basket);
      BasketDevice.belongsTo(models.Device);
    }
  }
  BasketDevice.init({
    device_id: DataTypes.INTEGER,
    basket_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BasketDevice',
  });
  return BasketDevice;
};
