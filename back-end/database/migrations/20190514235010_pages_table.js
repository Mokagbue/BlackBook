
exports.up = function(knex, Promise) {
    return knex.schema.createTable('pages', function(pages) {
        pages.increments();
        pages.string('authorname', 128).notNullable().unique();
        pages.integer('books_id').notNullable().unsigned().references('id').inTable('books');
        pages.string('pages_title').notNullable();
        pages.text('pages_content').notNullable();
        pages.dateTime('pages_date_made');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('pages');
  };
