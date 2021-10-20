var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Welcome TO MY Page");
});



module.exports = router;
