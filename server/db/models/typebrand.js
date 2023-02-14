'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeBrand extends Model {
    static associate(models) {
    }
  }
  TypeBrand.init({
    id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TypeBrand',
  });
  return TypeBrand;
};
