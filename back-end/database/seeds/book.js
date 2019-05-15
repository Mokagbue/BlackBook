
 exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {authorname: 'Sir Pendalwick 1', pages_id: '1'},
        {authorname: 'Sir Pendalwick 2', pages_id: '2'},
        {authorname: 'Sir Pendalwick 3', pages_id: '3'}
      ]);
    });
};
