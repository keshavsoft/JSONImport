let express = require("express");
let router = express.Router();
let CommonData = require("./FromMsSql/Insert");

router.use('/Insert', CommonData);

module.exports = router;