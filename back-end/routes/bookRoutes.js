//Books Routes
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//list all
router.get('/', (req, res) => {
    db('books').then(books => {
      res.status(200).json(books);
    })
    .catch(err => res.status(500).json({ error: 'failed to retrieve books', err }));
  });

  //knex create
router.post('/', (req, res) => {
    const book = req.body;
    db.insert(book)
    .into('books')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: 'failed to post new book', err });
    });
  });

  //knex return by id
router.get('/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const books = await db('books').where({ id }).first();
    res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: 'failed to get book by id', err });
    }
  });

   //get note by user id
router.get('/:id/users', (req, res) => {
    const { id } = req.params;
    db('books')
    .join('users', 'books.id', '=', 'users.books_id')
    .select('books.books_title as book', 'users.username')
    .where('users.books_id', id)
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    });
  });

  //knex delete
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('books')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No books, by that id, found to delete.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to delete book.', err}));
  }); 
  
  //knex update 
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('books')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No books found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to update book.', err}));
  });

  module.exports = router;