let express = require("express");
let router = express.Router();
let commonTallyTransactions = require("./Tally/Transactions");
let CommonMasters = require("./Tally/Masters");

router.use('/Masters', CommonMasters);
router.use('/Transactions', commonTallyTransactions);

module.exports = router;