const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      Device.belongsTo(models.Type, { foreignKey: 'type_id' });
      Device.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      Device.hasMany(models.Rating, { foreignKey: 'device_id' });
      Device.hasMany(models.BasketDevice, { foreignKey: 'device_id' });
      Device.hasMany(models.DeviceInfo, { as: 'info' }, { foreignKey: 'device_id' });
    }
  }
  Device.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    rating: DataTypes.STRING,
    img: DataTypes.STRING,
    typeid: DataTypes.INTEGER,
    brandid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};
