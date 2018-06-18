const express = require('express');
// const router = express.Router();
const mongoose = require('mongoose');
const Board = require('../models/Board');

module.exports = app => {
  app.get('/', (req, res, next) => {
    Board.find((err, products) => {
      console.log('inside /')
      // if (err) return next(err);
      // res.json(products);
    });
  }),

  app.get('/api/getBoard', (req, res, next) => {
    Board.find((err, products) => {
      console.log('inside /api/getBoard')
      if (err) return next(err);
      res.json(products);
    });
  }),

  app.post('/api/updateBoard', (req, res, next) => {
    Board.findByIdAndUpdate('5b242a6afb6fc033f88597cf', req.body, function(err, post) {
      if (err) return next(err);
      res.json(post)
    })
  })
}