var express = require('express');
var router = express.Router();

const login = require("../../controllers/login/login.controller.js");

// Login user
router.post('/', login.authenticate);

module.exports = router;