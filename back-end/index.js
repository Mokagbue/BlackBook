console.log("Good morning, index.js is functioning just fine!!");

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(cors());
server.use(helmet());

//routes
const noteRoutes = require('./routes/noteRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const bookRoutes = require('./routes/bookRoutes.js');
const pageRoutes = require('./routes/pageRoutes.js');

server.use('/api/notes', noteRoutes);
server.use('/api/users', userRoutes);
server.use('/api/books', bookRoutes);
server.use('/api/pages', pageRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Let\'s make some Magic!');
});

//port setup
const port = 8000;
server.listen(port, () => console.log(`==API is applying tiger balm on port ${port}==`));