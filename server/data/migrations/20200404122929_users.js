
exports.up = function(knex) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').unsigned().primary();
        t.string('username').notNull();
        t.string('email').notNull();
        t.string('password').notNull();
        t.string('role').notNull().defaultTo('user');
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
