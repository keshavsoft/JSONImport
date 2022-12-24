let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/Import/FromMsSql/Insert");
let CommonFromController = require("../../../Controllers/Import/FromMsSql/Insert.Controllers");

router.post('/BulkWithFileNameToDataOnly/:inFolderName/:inFileNameWithExtension', function (req, res, next) {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;

    Repos.BulkWithFileNameToDataOnly({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inUserPK: req.KeshavSoft.DataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

router.post('/BulkWithFileNameToDataOnlyResult/:inFolderName/:inFileNameWithExtension', CommonFromController.BulkWithFileNameToDataOnlyResult);

module.exports = router;