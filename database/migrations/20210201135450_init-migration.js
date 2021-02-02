
exports.up = function(knex) {
    return knex.schema
        .createTable('roles', tbl => {
            tbl.increments();
            tbl.string("name", 128).notNullable().unique()
        })
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string("username", 20).notNullable().unique();
            tbl.string("password", 128).notNullable();

            tbl
                .integer("role")
                .unsigned()
                .references('roles.id')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE")
                .defaultTo(1)
        })
        .createTable("posts", tbl => {
            tbl.increments();
            tbl.string("post_name", 128).notNullable();
            tbl.string("description", 1200).notNullable();
            tbl.string("city", 20).notNullable();
            tbl.string("abr_state", 2).notNullable();
            tbl.integer("zip", 5).notNullable();
            tbl.integer("creator_id")
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('votes', tbl => {
            tbl.increments()
            tbl.integer('post_id')
                .notNullable()
                .unsigned()
                .references('posts.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('user_id')
                .notNullable()
                .unsigned()
                .references('users.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.integer('direction').notNullable().defaultTo(0)
        })
        .createTable('user_posts', tbl => {
            tbl.increments()
            tbl.integer('post_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('posts')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_posts').dropTableIfExists("votes").dropTableIfExists("posts").dropTableIfExists("users").dropTableIfExists("roles");
};
