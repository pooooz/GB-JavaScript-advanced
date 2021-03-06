const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');
const {handleError} = require("../../public/js/vue_dist/vue.global");

router.get('/', (req, res) => {
  fs.readFile('src/server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

router.post('/', (req, res) => {
  handler(req, res, 'add', 'src/server/db/userCart.json');
});

router.put('/:id', (req, res) => {
  handler(req, res, 'change', 'src/server/db/userCart.json');
});

router.delete('/:id', (req, res) => {
  handler(req, res, 'remove', 'src/server/db/userCart.json');
});

module.exports = router;