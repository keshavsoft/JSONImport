let express = require('express');
let router = express.Router();
let Repos = require("../../../Repository/Import/FromMsSql/Insert");

router.post('/BulkWithFileNameToDataOnly/:inFolderName/:inFileNameWithExtension', function (req, res, next) {

    let LocalBody = req.body;
    console.log("jatin", LocalBody);
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;
    console.log("BulkWithFileNameToDataOnly : ");
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

module.exports = router;