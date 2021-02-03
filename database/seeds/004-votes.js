exports.seed = function(knex) {
  return knex('votes').insert([
    {id: 1, post_id: '1', user_id: 1, direction: -1},
    {id: 2, post_id: '2', user_id: 1, direction: 1},
    {id: 3, post_id: '3', user_id: 1, direction: 1},
    {id: 4, post_id: '4', user_id: 1, direction: 1},
    {id: 5, post_id: '5', user_id: 1, direction: 1},

    {id: 6, post_id: '2', user_id: 2, direction: 1},
    {id: 7, post_id: '1', user_id: 2, direction: -1},
    {id: 8, post_id: '3', user_id: 2, direction: 1},
    {id: 9, post_id: '4', user_id: 2, direction: 1},
    {id: 10, post_id: '5', user_id: 2, direction: 1},

    {id: 11, post_id: '1', user_id: 3, direction: -1},
    {id: 12, post_id: '2', user_id: 3, direction: 1},
    {id: 13, post_id: '3', user_id: 3, direction: 1},
    {id: 14, post_id: '4', user_id: 3, direction: 1},
    {id: 15, post_id: '5', user_id: 3, direction: 1},

    {id: 16, post_id: '1', user_id: 4, direction: -1},
    {id: 17, post_id: '2', user_id: 4, direction: -1},
    {id: 18, post_id: '3', user_id: 4, direction: -1},
    {id: 19, post_id: '4', user_id: 4, direction: 0},
    {id: 20, post_id: '5', user_id: 4, direction: -1},

    {id: 21, post_id: '1', user_id: 5, direction: -1},
    {id: 22, post_id: '2', user_id: 5, direction: -1},
    {id: 23, post_id: '3', user_id: 5, direction: -1},
    {id: 24, post_id: '4', user_id: 5, direction: -1},
    {id: 25, post_id: '5', user_id: 5, direction: 0},
  ]);
};
