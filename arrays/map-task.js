const _ = require('lodash');

const users = [
  { id: 1, first_name: 'Sergey', status: 'inactive' },
  { id: 2, first_name: 'Vadim', status: 'active' },
  { id: 3, first_name: 'Olga', status: 'active' },
];

const normalizeUsers = (users) =>
  _.map(users, (u) => ({
    id: u.id,
    firstName: u.first_name,
    isActive: u.status === 'active',
  }));

const usersNormalized = normalizeUsers(users);

console.log(usersNormalized);
