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
      directoryId: DataTypes.INTEGER,
      checksumId: DataTypes.INTEGER,
      fullName: DataTypes.STRING,
      directoryName: DataTypes.STRING,
      name: DataTypes.STRING,
      extension: DataTypes.STRING,
      length: DataTypes.BIGINT,
      creationTime: DataTypes.TIME,
      lastAccessTime: DataTypes.TIME,
      lastWriteAccessTime: DataTypes.TIME,
      lastOccurrenceTime: DataTypes.TIME,
      owner: DataTypes.STRING,
      deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "File",
      underscored: false,
    }
  );
  return File;
};
