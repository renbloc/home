
exports.up = function(knex) {
    return knex.schema.createTable('comments', function(t) {
        t.increments('id').unsigned().primary();
        t.string('comment').notNull();
        t.integer('rating').unsigned();

        t.integer('userId').unsigned();
        t.integer('orgId').unsigned();

        t.foreign('userId').references('id').inTable('users');
        t.foreign('orgId').references('id').inTable('organisation');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
