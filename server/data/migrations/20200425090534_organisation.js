
exports.up = function(knex) {
    return knex.schema.createTable('organisation', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('refId').unsigned();

        t.foreign('refId').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('organisation');
};
