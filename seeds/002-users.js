const bcrypt = require('bcryptjs');
const rounds = process.env.BCRYPT_ROUNDS || 8;

exports.seed = function(knex) {
  const hashedDefault = bcrypt.hashSync('password', rounds)
  return knex('users').insert([
    {id: 1, username: 'admin', password: hashedDefault},
    {id: 2, username: 'user', password: hashedDefault},
    {id: 3, username: 'dummyUserForVotes1', password: hashedDefault},
    {id: 4, username: 'dummyUserForVotes2', password: hashedDefault},
    {id: 5, username: 'dummyUserForVotes3', password: hashedDefault},
    {id: 6, username: 'dummyUserForVotes4', password: hashedDefault},
    {id: 7, username: 'dummyUserForVotes5', password: hashedDefault},
    {id: 8, username: 'dummyUserForVotes6', password: hashedDefault},
    {id: 9, username: 'dummyUserForVotes7', password: hashedDefault},
    {id: 10, username: 'dummyUserForVotes8', password: hashedDefault},
    {id: 11, username: 'dummyUserForVotes9', password: hashedDefault},
    {id: 12, username: 'dummyUserForVotes10', password: hashedDefault},
  ]);
};
