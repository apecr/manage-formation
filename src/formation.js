const {getElements, closeConnection} = require('./db');

const getElementsFromDB = async() => {
  const elements = await getElements();
  await closeConnection();
  return elements;
};


const getCostElements = async _ => {
  const elements = await getElementsFromDB();
  const cost = elements.reduce((acc, el) => acc + el.price, 0);
  return cost;
};


module.exports = {
  getCostElements,
  getElementsFromDB
};