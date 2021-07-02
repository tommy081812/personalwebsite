var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var person_name = '정성균';
  res.render('chung', { title: 'Express' , user_name:person_name});
});
router.get('/:user_name', function(req, res, next) {
    var person_name = req.params.user_name
  res.render('chung', { title: 'Express' , user_name:person_name});
});

module.exports = router;
