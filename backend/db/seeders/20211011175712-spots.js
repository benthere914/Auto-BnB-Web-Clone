'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Spots',
      [
          {ownerId: 1, title: 'Lambo for rent', description: 'really cool lambo', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 1, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 1, title: 'Explorer for rent', description: 'really cool explorer', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 2, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 1, title: 'Ford F150 for rent', description: 'really cool Ford F150', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 3, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 1, title: 'Jeep for rent', description: 'really cool Jeep', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 4, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 1, title: 'Tesla model 3for rent', description: 'really cool Tesla model 3', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 5, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 1, title: 'Civic for rent', description: 'really cool civic', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 6, createdAt: new Date(), updatedAt: new Date()},

          {ownerId: 2, title: 'Ferrari for rent', description: 'really cool ferrari', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 1, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 2, title: 'Excursion for rent', description: 'really cool excursion', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 2, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 2, title: 'Ram 1500 for rent', description: 'really cool ram 1500', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 3, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 2, title: 'Dune buggy for rent', description: 'really cool dune buggy', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 4, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 2, title: 'Chevorlet Bolt for rent', description: 'really cool Bolt', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 5, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 2, title: 'Sonata for rent', description: 'really cool Sonata', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 6, createdAt: new Date(), updatedAt: new Date()},

          {ownerId: 3, title: 'Mustang for rent', description: 'really cool mustang', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 1, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 3, title: 'Tahoe for rent', description: 'really cool tahoe', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 2, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 3, title: 'Silverado for rent', description: 'really cool silverado', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 3, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 3, title: 'Ford Bronco for rent', description: 'really cool bronco', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 4, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 3, title: 'Kia Niro EV  for rent', description: 'really cool Kia Niro EV', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 5, createdAt: new Date(), updatedAt: new Date()},
          {ownerId: 3, title: 'accord for rent', description: 'really cool accord', pricePerDay: 50, mileage: 20000, year: 2019,  typeId: 6, createdAt: new Date(), updatedAt: new Date()},

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
