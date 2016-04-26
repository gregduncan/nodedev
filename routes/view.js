var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res) {
   res.render('index', { title: 'Node on Azure'});
});

module.exports = router;