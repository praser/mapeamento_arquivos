module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Checksums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      md5: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(32),
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
    await queryInterface.dropTable("Checksums");
  },
};
