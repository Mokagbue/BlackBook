console.log("Good morning, index.js is functioning just fine!!");

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(cors());
server.use(helmet());

//routes
const noteRoutes = require('./routes/noteRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

server.use('/api/notes', noteRoutes);
server.use('/api/users', userRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Working...working...working...');
});

//port setup
const port = 8000;
server.listen(port, () => console.log(`==API is applying tiger balm on port ${port}==`));