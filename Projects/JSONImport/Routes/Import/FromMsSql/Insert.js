let express = require('express');
let router = express.Router();
 let Repos = require("../../../Repository/Import/FromMsSql/Insert");

router.post('/BulkWithFileNameToDataOnly/:inFolderName/:inFileNameWithExtension', function (req, res, next) {
    console.log("jatin");
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;
    let LocalDataPk =  req.KeshavSoft.DataPk
    console.log("BulkWithFileNameToDataOnly : ");
    Repos.BulkWithFileNameToDataOnly({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inUserPK:LocalDataPk
    }).then(PromiseData => {
        res.json(PromiseData);
    }).catch(PromiseError => {
        res.end(JSON.stringify(PromiseError));
    });
});

module.exports = router;