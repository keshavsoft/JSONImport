var express = require('express');
var router = express.Router();
let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
//let CommonApi = require("./Routes/Api");
let CommonValidate = require('./Routes/Validate');
let CommonImport = require("./Routes/Import");

//router.use('/Api', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonApi);
router.use('/Validate', CommonValidate);
router.use('/Import', CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonImport);

module.exports = router;