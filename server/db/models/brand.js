const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Device);
      Brand.belongsToMany(models.Type, { through: 'TypeBrand' });
    }
  }
  Brand.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};
