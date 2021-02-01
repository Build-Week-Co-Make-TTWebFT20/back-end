const bcrypt = require('bcryptjs');
const rounds = process.env.BCRYPT_ROUNDS || 8;

exports.seed = function(knex) {
  const hashedDefault = bcrypt.hashSync('password', rounds)
  return knex('users').insert([
    {id: 1, username: 'admin', password: hashedDefault},
    {id: 2, username: 'user', password: hashedDefault}
  ]);
};
