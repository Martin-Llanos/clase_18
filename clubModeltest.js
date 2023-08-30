const { Sequelize } = require('sequelize');
const setupClubModel = require('Lanus');

describe('Lanus', () => {
  test('Should return a club model', () => {
    const sequelize = new Sequelize('sqlite::memory:');
    const Lanus = setupClubModel(sequelize);
    expect(Lanus).toEqual(sequelize.models.Lanus);
  });
});
