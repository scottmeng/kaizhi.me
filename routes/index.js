var express = require('express');
var router = express.Router();
var posts = require('../data/posts.json');

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', {
  		page: 'about'
  	});
});

router.get('/thoughts', function(req, res) {
	res.render('thoughts-list', {
		page: 'thoughts',
		posts: posts
	});
});

router.get('/:slug', function(req, res) {
	var slug = req.params.slug;

	var targetPost = posts.some(function(post) {
		return post.slug !== slug;
	});

	if (targetPost) {
		res.render(slug, {
			page: 'thoughts'
		});
	} else {
		res.render('error', {
			page: 'about'
		});
	}
});

/* GET other thoughts pages */

module.exports = router;
