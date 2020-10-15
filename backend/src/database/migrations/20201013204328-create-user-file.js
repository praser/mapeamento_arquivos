'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING(7)
      },
      fileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Files",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      uniqueKeys: {
        actions_unique: {
            fields: ['userId', 'fileId']
        }
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserFiles');
  }
};