const _ = require('lodash');

const products = [
  {
    id: 1,
    name: 'meat',
    price: 5,
  },
  {
    id: 2,
    name: 'milk',
    price: 2,
  },
  {
    id: 3,
    name: 'bread',
    price: 1,
  },
];

const filterProducts = (products, searchVal) =>
  _.filter(products, (p) => p.name.includes(searchVal));

const productsWithM = filterProducts(products, 'm');

console.log(productsWithM);
