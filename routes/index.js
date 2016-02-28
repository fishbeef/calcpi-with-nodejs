var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pi', function(req, res, next) {

    var result;

    /**
     * This function estimates pi using Monte-Carlo integration
     * https://en.wikipedia.org/wiki/Monte_Carlo_integration
     * @returns {number}
     */
    function estimatePi() {
        var n = 10000000, inside = 0, i, x, y;

        for ( i = 0; i < n; i++ ) {
            x = Math.random();
            y = Math.random();
            if ( Math.sqrt(x * x + y * y) <= 1 )
                inside++;
        }

        return 4 * inside / n;
    }

  res.render('pi', { title: 'Pi Calc', result: estimatePi()});
});

module.exports = router;

