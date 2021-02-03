exports.seed = function(knex) {
  return knex('comments').insert([
    {text_data: 'This is a comment', post_id: 1, user_id: 1},
    {text_data: 'This is a comment', post_id: 1, user_id: 1},
    {text_data: 'This is a comment', post_id: 1, user_id: 1},
    {text_data: 'This is a comment', post_id: 1, user_id: 1},
    {text_data: 'This is a comment', post_id: 2, user_id: 2},
    {text_data: 'This is a comment', post_id: 2, user_id: 1},
    {text_data: 'This is a comment', post_id: 3, user_id: 1},
    {text_data: 'This is a comment', post_id: 3, user_id: 2},
    {text_data: 'This is a comment', post_id: 4, user_id: 1}
  ]);
};