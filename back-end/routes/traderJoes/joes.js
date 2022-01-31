const express = require("express");
const router = express.Router();
const axios = require("axios");
//const bodyParser = require("body-parser");

router.get('/joes', function(req, res, next) {
    res.send("bye");
});

module.exports = router;
