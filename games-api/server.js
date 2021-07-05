const express = require('express');

const Games = require('../games-model/gamesModel');

const server = express();

server.use(express.json());

server.get('/', async (req,res) => {
  res.status(200).json({ message: 'Welcome to the games API Sprint testing challenge'})
});

server.get('/games', async (req, res) => {
  const games = await Games.getAll();
  res.status(200).json(games)
});

server.post('/games', async (req, res) => {
  try {
    const newGame = await Games.add(req.body)

    res.status(201).json(newGame)
  } catch (error) {
    res.status(421).json(error)
  }
});

module.exports = server;

