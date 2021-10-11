'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Types',
      [
          {id: 1, type: 'Sports Cars', createdAt: new Date(), updatedAt: new Date()},
          {id: 2, type: 'Family Cars', createdAt: new Date(), updatedAt: new Date()},
          {id: 3, type: 'Trucks', createdAt: new Date(), updatedAt: new Date()},
          {id: 4, type: 'Off Roading', createdAt: new Date(), updatedAt: new Date()},
          {id: 5, type: 'Electric Cars', createdAt: new Date(), updatedAt: new Date()},
          {id: 6, type: 'Sedans', createdAt: new Date(), updatedAt: new Date()},
      ]
      , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Types', null, {});
  }
};
