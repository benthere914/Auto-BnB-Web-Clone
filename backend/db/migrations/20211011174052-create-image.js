'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      alt: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: {
              tableName: "Spots",
            },
          },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};
