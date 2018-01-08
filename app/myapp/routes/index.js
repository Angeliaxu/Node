var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* 在路由中使用locals*/
function lll(req, res) {
    res.locals = {
        d: 'count'
    }
}
module.exports = router;