const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Checksum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.File);
    }
  }
  Checksum.init(
    {
      md5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Checksum",
      underscored: true,
    }
  );
  return Checksum;
};
