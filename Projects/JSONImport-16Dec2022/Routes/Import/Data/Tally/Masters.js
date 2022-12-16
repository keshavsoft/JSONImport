let express = require("express");
let router = express.Router();
let CommonStockGroup = require("./Masters/StockGroup");

router.use('/StockGroup', CommonStockGroup);

module.exports = router;