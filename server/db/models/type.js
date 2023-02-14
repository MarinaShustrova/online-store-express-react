const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      Type.hasMany(models.Device, { foreignKey: 'type_id', as: 'devices' });
      Type.belongsToMany(models.Brand, { through: 'TypeBrand' }, { foreignKey: 'type_id' });
    }
  }
  Type.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};
