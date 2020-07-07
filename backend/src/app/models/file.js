const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Directory);
      this.belongsTo(models.Checksum);
    }
  }
  File.init(
    {
      directory_id: DataTypes.INTEGER,
      checksum_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      directory_name: DataTypes.STRING,
      name: DataTypes.STRING,
      extension: DataTypes.STRING,
      length: DataTypes.BIGINT,
      creation_time: DataTypes.TIME,
      last_access_time: DataTypes.TIME,
      last_write_access_time: DataTypes.TIME,
      last_occurrence_time: DataTypes.TIME,
      owner: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "File",
      underscored: true,
    }
  );
  return File;
};
