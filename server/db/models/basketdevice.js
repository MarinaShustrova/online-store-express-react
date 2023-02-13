'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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