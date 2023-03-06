var express = require('express');
var router = express.Router();

const register = require("../../controllers/register/registrasi.controller");

// Create a new user
router.post('/', register.create);

module.exports = router;