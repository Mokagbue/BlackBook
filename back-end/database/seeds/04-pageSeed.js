
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pages').del()
    .then(function () {
      // Inserts seed entries
      return knex('pages').insert([
        {authorname: 'Sir Pendalwick 1', books_id: '1', pages_title: 'Cheese Grattte', pages_content: "he managed to turn the metal slab into a cheese grate...gratter?..grattte?"},
        {authorname: 'Miranda', books_id: '1', pages_title: 'Cats Cats Cats', pages_content: "Cats go meow?"},
        {authorname: 'BLARRGGGHHHH', books_id: '2', pages_title: 'Julia Runs Away', pages_content: "H.I.M"},
      ]);
    });
};
