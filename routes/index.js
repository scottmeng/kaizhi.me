var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', {
  		page: 'about'
  	});
});

router.get('/thoughts', function(req, res) {
	res.render('thoughts-list', {
		page: 'thoughts'
	});
});

/* GET other thoughts pages */

module.exports = router;
