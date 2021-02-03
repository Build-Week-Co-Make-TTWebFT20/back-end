const bcrypt = require('bcryptjs');
const rounds = process.env.BCRYPT_ROUNDS || 8;

exports.seed = function(knex) {
  const hashedDefault = bcrypt.hashSync('password', rounds)
  return knex('users').insert([
    {username: 'admin', password: hashedDefault},
    {username: 'user', password: hashedDefault},
    {username: 'dummyUserForVotes1', password: hashedDefault},
    {username: 'dummyUserForVotes2', password: hashedDefault},
    {username: 'dummyUserForVotes3', password: hashedDefault},
    {username: 'dummyUserForVotes4', password: hashedDefault},
    {username: 'dummyUserForVotes5', password: hashedDefault},
    {username: 'dummyUserForVotes6', password: hashedDefault},
    {username: 'dummyUserForVotes7', password: hashedDefault},
    {username: 'dummyUserForVotes8', password: hashedDefault},
    {username: 'dummyUserForVotes9', password: hashedDefault},
    {username: 'dummyUserForVotes10', password: hashedDefault},
  ]);
};
