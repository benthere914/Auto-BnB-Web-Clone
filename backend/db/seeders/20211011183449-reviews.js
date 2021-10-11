'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews',
      [
          {spotId: 1, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 1, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 1, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 2, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 2, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 2, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 3, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 3, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 3, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 4, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 4, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 4, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 5, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 5, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 5, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 6, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 6, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 6, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 7, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 7, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 7, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 8, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 8, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 8, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 9, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 9, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 9, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 10, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 10, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 10, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 11, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 11, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 11, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 12, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 12, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 12, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 13, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 13, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 13, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 14, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 14, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 14, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 15, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 15, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 15, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 16, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 16, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 16, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 17, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 17, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 17, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

          {spotId: 18, userId: 1, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 18, userId: 2, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},
          {spotId: 18, userId: 3, review: faker.lorem.sentence(), createdAt: new Date(), updatedAt: new Date()},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
