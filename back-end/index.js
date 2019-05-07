console.log("Index.js is here!");

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
// const noteRoutes = require('./routes/noteRoutes.js');
// const userRoutes = require('./routes/userRoutes.js');

// server.use('/api/notes', noteRoutes);
// server.use('/api/users', userRoutes);

//server tester message
server.get('/', (req, res) => {
    res.send('Let\'s make some Magic!');
});

//port setup
const port = 8000;
server.listen(port, () => console.log(`==API is applying tiger balm on port ${port}==`));