exports.seed = function (knex, Promise) {
  return knex('cars').truncate()
      .then(function () {
          // add data into insert
          return knex('cars').insert([
              { make: 'delorean', model: 'time machine', VIN: 'N/A', mileage: 88, transmission: 'flux-capacitor', title: 'clean' }
          ]);
      });
};