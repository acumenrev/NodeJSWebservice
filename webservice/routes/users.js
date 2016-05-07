var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/testUser1', function (req, res) {
	 /* body... */
	// res.send(JSON.stringify({""}));
	random(res);
});

router.get('/:userId/:donationId', function (req, res, next) {
	console.log("UserId: ", req.params.userId);
	res.writeHead(200, {"Content-Type":"application/json"});
	res.end(JSON.stringify({"userId":req.params.userId,
							"donationId":req.params.donationId}));
	next();
});

router.post('/testu1', function (req, res) {
	 /* body... */ 
	 console.log("username: ", req.body.username);
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("data post");
});

function random(response) {
    console.log("Request handler random was called.");
    response.writeHead(200, {"Content-Type":"application/json"});

    var otherArray = ["item1", "item2"];
    var otherObject = {item1:"item1val", item2:"item2val"};
    var json = JSON.stringify({anObject: otherObject,
    anArray: otherArray,
    another: "item"});

    response.end(json);
    // response.send(json);
}

module.exports = router;
