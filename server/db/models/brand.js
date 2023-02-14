const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Device, { foreignKey: 'brand_id', as: 'devices' });
      Brand.belongsToMany(models.Type, { through: 'TypeBrand' }, { foreignKey: 'brand_id', as: 'types' });
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
