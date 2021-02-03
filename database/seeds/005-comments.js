exports.seed = function(knex) {
  return knex('comments').insert([
    {id: 1, text_data: 'This is a comment', post_id: 1, user_id: 1},
    {id: 2, text_data: 'This is a comment', post_id: 1, user_id: 1},
    {id: 3, text_data: 'This is a comment', post_id: 1, user_id: 1},
    {id: 4, text_data: 'This is a comment', post_id: 1, user_id: 1},
    {id: 5, text_data: 'This is a comment', post_id: 2, user_id: 2},
    {id: 6, text_data: 'This is a comment', post_id: 2, user_id: 1},
    {id: 7, text_data: 'This is a comment', post_id: 3, user_id: 1},
    {id: 8, text_data: 'This is a comment', post_id: 3, user_id: 2},
    {id: 9, text_data: 'This is a comment', post_id: 4, user_id: 1}
  ]);
};