const {getElements, closeConnection} = require('./db');

const getElementsFromDB = async() => {
  const elements = await getElements();
  await closeConnection();
  return elements;
};


const getCostElements = async _ => {
  const elements = await getElementsFromDB();
  return elements.reduce((acc, el) => acc + el.price, 0);
};


module.exports = {
  getCostElements,
  getElementsFromDB
};