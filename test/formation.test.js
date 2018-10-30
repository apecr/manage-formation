const { expect } = require('chai');
const {getElementsFromDB, getCostElements} = require('../src/formation');
const {closeConnection} = require('./../src/db');


/*global describe, it, after */
describe('formation', () => {
  it('Get cost of the elements', async() => {
    const cost = await getCostElements();
    expect(cost).to.be.equal(471.88);
  });
});