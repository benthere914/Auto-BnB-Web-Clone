'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      const date = new Date();

      return queryInterface.bulkInsert('Bookings',
      [
          {spotId: 1, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 1, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 1, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 2, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 2, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 2, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 3, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 3, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 3, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 4, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 4, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 4, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 5, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 5, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 5, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 6, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 6, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 6, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 7, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 7, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 7, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 8, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 8, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 8, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 9, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 9, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 9, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 10, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 10, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 10, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 11, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 11, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 11, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 12, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 12, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 12, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 13, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 13, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 13, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 14, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 14, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 14, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 15, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 15, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 15, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 16, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 16, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 16, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 17, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 17, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 17, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

          {spotId: 18, userId: 1, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 18, userId: 2, appointmentDate: date, createdAt: date, updatedAt: date},
          {spotId: 18, userId: 3, appointmentDate: date, createdAt: date, updatedAt: date},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
