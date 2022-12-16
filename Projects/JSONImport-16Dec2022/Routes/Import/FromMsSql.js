let express = require("express");
let router = express.Router();
let CommonData = require("./FromMsSql/Insert");
let CommonToFolders = require("./FromMsSql/ToFolders");

router.use('/Insert', CommonData);
router.use('/ToFolders', CommonToFolders);

module.exports = router;