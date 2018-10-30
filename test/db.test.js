const { expect } = require('chai');
const {getElements} = require('../src/db');


/*global describe, it */

describe('Get the elements', () => {
  it('Should get all the elements in the db', async() => {
    const elements = await getElements();
    console.log(JSON.stringify(elements[0], undefined, 2));
    console.log(elements.reduce((acc, el) => acc + el.price, 0));
    expect(elements).to.be.an('Array').and.have.length(8);
  });
});