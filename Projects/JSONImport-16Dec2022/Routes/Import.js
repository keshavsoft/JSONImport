var express = require('express');
var router = express.Router();
let CommonData = require("./Import/Data");
let CommonFromMsSql = require("./Import/FromMsSql");

router.use('/Data', CommonData);
router.use('/FromMsSql', CommonFromMsSql);

module.exports = router;