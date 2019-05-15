//Books Routes
const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

//list all
router.get('/', (req, res) => {
    db('pages').then(pages => {
      res.status(200).json(pages);
    })
    .catch(err => res.status(500).json({ error: 'failed to retrieve pages', err }));
  });

  //knex create
router.post('/', (req, res) => {
    const book = req.body;
    db.insert(book)
    .into('pages')
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
    const pages = await db('pages').where({ id }).first();
    res.status(200).json(pages);
    } catch (err) {
      res.status(500).json({ error: 'failed to get page by id', err });
    }
  });

   //get note by user id
router.get('/:id/users', (req, res) => {
    const { id } = req.params;
    db('pages')
    .join('users', 'pages.id', '=', 'users.pages_id')
    .select('pages.pages_title as book', 'users.username')
    .where('users.pages_id', id)
    .then(response => {
      console.log(response)
      res.status(200).json(response)
    });
  });

  //knex delete
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    db('pages')
    .where({ id })
    .delete()
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No pages, by that id, found to delete.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to delete page.', err}));
  }); 
  
  //knex update 
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db('pages')
    .where({ id })
    .update(changes)
    .then(count => {
      if(!count || count<1) {
        res.status(404).json({ message: 'No pages found.' });
      } else {
        res.status(200).json(count);
      }
    })
    .catch(err => res.status(500).json({ message: 'failed to update page.', err}));
  });

  module.exports = router;