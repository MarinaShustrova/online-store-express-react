const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketDevice extends Model {
    static associate(models) {
      BasketDevice.hasMany(models.Basket, { foreignKey: 'device_id' });
      BasketDevice.belongsTo(models.Device, { foreignKey: 'device_id' });
    }
  }
  BasketDevice.init({
    device_id: DataTypes.INTEGER,
    basket_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BasketDevice',
  });
  return BasketDevice;
};
