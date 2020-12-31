const _ = require('lodash');

const nums = [1, 2, 3];

const native = nums.map((n, i) => ({ id: i, number: n }));

const lodash = _.map(nums, (n, i) => ({ id: i, number: n }));

console.log('native => ', native);
console.log('lodash => ', lodash);

// also works with objects
const users = {
  id_1: 'Sergey',
  id_2: 'Olga',
  id_3: 'Vlad',
};

const names = _.map(users, (name) => name);

console.log('names => ', names);

const students = [
  { id: 1, name: 'Sergey' },
  { id: 2, name: 'Olga' },
  { id: 3, name: 'Vlad' },
];

const ids = _.map(students, 'id'); // also supports nesting => student.id

console.log('ids => ', ids);
