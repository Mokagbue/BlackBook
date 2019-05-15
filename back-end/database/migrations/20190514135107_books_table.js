
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function(books) {
        books.increments();
        books.string('authorname', 128).notNullable().unique();
        books.integer('pages_id').notNullable().unsigned().references('id').inTable('pages');
        
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
  };
