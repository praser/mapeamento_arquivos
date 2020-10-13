'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.File)
    }
  };
  UserFile.init({
    userId: DataTypes.STRING,
    fileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFile',
    underscored: false,
  });
  return UserFile;
};