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
          {id: 1, type: 'Sports Cars'},
          {id: 2, type: 'Family Cars'},
          {id: 3, type: 'Trucks'},
          {id: 4, type: 'Off Roading'},
          {id: 5, type: 'Electric Cars'},
          {id: 6, type: 'Sedans'},
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
