'use strict';

let arr = [];
for (let i = 1; i <= 18; i++){
    arr.push(
        {spotId: i, feature: 'Leather Seats', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Wifi', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Movie Screens in the back', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Adaptive Cruise Control', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: '360 Degree Camera', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Parking Assist', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Automotive Night Vision', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Heads Up Display', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Drowsiness Detection', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Autonomous Driving', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Anti-Collision Warning System', createdAt: new Date(), updatedAt: new Date()},
        {spotId: i, feature: 'Back Up Camera', createdAt: new Date(), updatedAt: new Date()}
    )
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Features',
      arr, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Features', null, {});
  }
};
