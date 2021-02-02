
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
            tbl.string("name", 128).notNullable();
            tbl.string("description", 1200).notNullable();
            tbl.string("city", 20).notNullable();
            tbl.string("state", 2).notNullable();
            tbl.integer("zip", 5).notNullable();
            tbl.integer("creator_id")
                .notNullable()
                .unsigned()
                .references('users.id')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('votes', tbl => {
            tbl.increments();
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
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("votes").dropTableIfExists("posts").dropTableIfExists("users").dropTableIfExists("roles");
};
