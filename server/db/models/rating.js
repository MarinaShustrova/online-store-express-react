'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
  
    static associate(models) {
      Rating.belongsTo(models.User);
      Rating.belongsTo(models.Device);
    }
  }
  Rating.init({
    user_id: DataTypes.INTEGER,
    device_id: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
