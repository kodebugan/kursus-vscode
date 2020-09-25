var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
  res.sendfile('register.html', { 
    root: path.join(__dirname, '../public')
  });
});

module.exports = router;
