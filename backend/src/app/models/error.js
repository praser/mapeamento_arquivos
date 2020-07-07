const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Error extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Directory);
    }
  }
  Error.init(
    {
      directoryId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Error",
      underscored: false,
    }
  );
  return Error;
};
