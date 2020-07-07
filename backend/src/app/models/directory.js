const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Directory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Error);
      this.hasMany(models.File);
    }
  }
  Directory.init(
    {
      path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Directory",
      underscored: false,
    }
  );
  return Directory;
};
