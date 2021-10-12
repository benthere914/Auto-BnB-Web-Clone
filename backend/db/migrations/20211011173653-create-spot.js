'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: {
              tableName: "Users",
            },
          },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      }
      ,pricePerDay: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      mileage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
            model: {
              tableName: "Types",
            },
          },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};
