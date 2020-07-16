module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Errors", {
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
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(4000),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(4000),
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
    await queryInterface.dropTable("Errors");
  },
};
