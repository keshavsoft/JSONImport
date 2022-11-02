var express = require('express');
var router = express.Router();
let CommonData = require("./Import/Data");

router.use('/Data', CommonData);

module.exports = router;