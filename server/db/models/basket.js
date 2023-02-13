'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
    Basket.belongsTo(models.User);
    Basket.hasMany(models.BasketDevice);
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
