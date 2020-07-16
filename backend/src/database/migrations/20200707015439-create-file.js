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
        references: {
          model: "Directories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      checksumId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Checksums",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(4000),
      },
      directoryName: {
        type: Sequelize.STRING(4000),
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
        type: Sequelize.DATE,
      },
      lastAccessTime: {
        type: Sequelize.DATE,
      },
      lastWriteTime: {
        type: Sequelize.DATE,
      },
      lastOccurrenceTime: {
        type: Sequelize.DATE,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
