const _ = require('lodash');

const users = [
  { id: 1, likes: 110, name: 'Sergey' },
  { id: 2, likes: 90, name: 'Vadim' },
  { id: 3, likes: 50, name: 'Olga' },
];

const getPopularUsers = (users, minLikes = 100) =>
  _.reject(users, (user) => user.likes < minLikes);

const popularUsers = getPopularUsers(users);

console.log(popularUsers);
