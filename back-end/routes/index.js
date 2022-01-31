const express = require("express");
const router = express.Router();
const axios = require("axios");
const bodyParser = require("body-parser");

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("hi");
});

module.exports = router;
