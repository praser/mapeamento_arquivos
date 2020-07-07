module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Files", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      directoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        eferences: {
          model: "Directories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      checksumId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        eferences: {
          model: "Checksums",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      directoryName: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      extension: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.BIGINT,
      },
      creationTime: {
        type: Sequelize.TIME,
      },
      lastAccessTime: {
        type: Sequelize.TIME,
      },
      lastWriteAccessTime: {
        type: Sequelize.TIME,
      },
      lastOccurrenceTime: {
        type: Sequelize.TIME,
      },
      owner: {
        type: Sequelize.STRING,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Files");
  },
};
