const express = require("express");
const router = express.Router();
const axios = require("axios");
//const bodyParser = require("body-parser");

router.get('/joesItems', function(req, res, next) {
    res.send("Items");
});

module.exports = router;
