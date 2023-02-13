const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    static associate(models) {
      Device.belongsTo(models.Type);
      Device.belongsTo(models.Brand);
      Device.hasMany(models.Rating);
      Device.hasMany(models.BasketDevice);
      Device.hasMany(models.DeviceInfo, {as: 'info'});
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
