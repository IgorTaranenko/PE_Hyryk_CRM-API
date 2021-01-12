const express = require('express');
const passport = require('passport');

const controller = require('../conrollers/category');

const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);

module.exports = router;