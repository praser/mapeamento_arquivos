module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Files", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      directory_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        eferences: {
          model: "Directories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      checksum_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        eferences: {
          model: "Checksums",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      directory_name: {
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
      creation_time: {
        type: Sequelize.TIME,
      },
      last_access_time: {
        type: Sequelize.TIME,
      },
      last_write_access_time: {
        type: Sequelize.TIME,
      },
      last_occurrence_time: {
        type: Sequelize.TIME,
      },
      owner: {
        type: Sequelize.STRING,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Files");
  },
};
