let express = require("express");
let router = express.Router();
let CommonTemplateFromCommon = require("./Transactions/TemplateFromCommon");
let CommonToDataOnly = require("./Transactions/ToDataOnly");
let CommonCompanyFolderDateTimeWithItem = require("./Transactions/CompanyFolderDateTimeWithItem");
let CommonDateTimeAsFolder = require("./Transactions/DateTimeAsFolder");
let CommonTemplateFromFileOnly = require("./Transactions/TemplateFromFileOnly");

router.use('/TemplateFromCommon', CommonTemplateFromCommon);
router.use('/ToDataOnly', CommonToDataOnly);
router.use('/CompanyFolderDateTimeWithItem', CommonCompanyFolderDateTimeWithItem);
router.use('/DateTimeAsFolder', CommonDateTimeAsFolder);
router.use('/TemplateFromFileOnly', CommonTemplateFromFileOnly);

module.exports = router;