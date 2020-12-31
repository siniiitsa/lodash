const _ = require('lodash');

const nums = [1, 2, 3];

// native forEach returns undefined
const nativeReturn = nums.forEach((n) => {
  console.log(n);
});

// lodash each return original array so we can chain other methods
const lodashReturn = _.each(nums, (n) => {
  console.log(n);
});

// lodash each also works with objects
const users = {
  id_1: 'Sergey',
  id_2: 'Olga',
  id_3: 'Vlad',
};

_.each(users, (value, key) => {
  console.log(`${key}: ${value}`);
});
