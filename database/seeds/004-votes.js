exports.seed = function(knex) {
  return knex('votes').insert([
    {post_id: '1', user_id: 1, direction: -1},
    {post_id: '2', user_id: 1, direction: 1},
    {post_id: '3', user_id: 1, direction: 1},
    {post_id: '4', user_id: 1, direction: 1},
    {post_id: '5', user_id: 1, direction: 1},

    {post_id: '2', user_id: 2, direction: 1},
    {post_id: '1', user_id: 2, direction: -1},
    {post_id: '3', user_id: 2, direction: 1},
    {post_id: '4', user_id: 2, direction: 1},
    { post_id: '5', user_id: 2, direction: 1},

    { post_id: '1', user_id: 3, direction: -1},
    { post_id: '2', user_id: 3, direction: 1},
    { post_id: '3', user_id: 3, direction: 1},
    { post_id: '4', user_id: 3, direction: 1},
    { post_id: '5', user_id: 3, direction: 1},

    { post_id: '1', user_id: 4, direction: -1},
    { post_id: '2', user_id: 4, direction: -1},
    { post_id: '3', user_id: 4, direction: -1},
    { post_id: '4', user_id: 4, direction: 0},
    { post_id: '5', user_id: 4, direction: -1},

    { post_id: '1', user_id: 5, direction: -1},
    { post_id: '2', user_id: 5, direction: -1},
    { post_id: '3', user_id: 5, direction: -1},
    { post_id: '4', user_id: 5, direction: -1},
    { post_id: '5', user_id: 5, direction: 0},
  ]);
};
