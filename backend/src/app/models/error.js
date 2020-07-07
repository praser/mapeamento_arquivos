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
      directory_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Error",
      underscored: true,
    }
  );
  return Error;
};
