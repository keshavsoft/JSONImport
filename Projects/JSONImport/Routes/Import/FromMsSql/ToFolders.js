let express = require("express");
let router = express.Router();
let CommonInsert = require("./ToFolders/Insert");

router.use('/Insert', CommonInsert);

module.exports = router;