let express = require("express");
let router = express.Router();
let CommonData = require("./Data/Tally");

router.use('/Tally', CommonData);

module.exports = router;