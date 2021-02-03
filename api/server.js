const express = require('express');
const cors = require('cors');
// const helmet = require('helmet');

const server = express();

const authRouter = require('./auth/auth-router.js');
const postRouter = require('./posts/post-router');
const voteRouter = require('./votes/vote-router');

// server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/posts', postRouter);
server.use('/api/votes', voteRouter);

server.get('/', (req, res) => {
    res.json({ api: "up" })
});

module.exports = server;