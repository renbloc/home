
exports.up = function(knex) {
    return knex.schema.createTable('worker', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('refId').references('id').inTable('users').index(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('worker');
};
