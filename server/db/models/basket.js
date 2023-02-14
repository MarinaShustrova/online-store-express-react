const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsTo(models.User, { foreignKey: 'user_id' });
      Basket.hasMany(models.BasketDevice, { foreignKey: 'basket_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
