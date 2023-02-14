const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeviceInfo extends Model {
    static associate(models) {
      DeviceInfo.belongsTo(models.Device, { foreignKey: 'deviceId' });
    }
  }
  DeviceInfo.init({
    device_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DeviceInfo',
  });
  return DeviceInfo;
};
