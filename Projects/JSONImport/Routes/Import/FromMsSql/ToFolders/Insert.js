let express = require('express');
let router = express.Router();
//let Repos = require("../../../../../../Repository/AdminApi/Utility/Json/Folder/FromMsSql/Insert");
let Repos = require("../../../../Repository/Import/FromMsSql/ToFolders/Insert");
let CommonFromController = require("../../../../Controllers/Import/FromMsSql/ToFolders/Insert.Controllers");

router.post('/Bulk/:FolderName', function (req, res, next) {
    // let LocalDataPK = req.KeshavSoft.DataPk;
    // let LocalFolderName = req.params.FolderName;
    // let LocalBody = req.body;

    // Repos.Bulk({ inToName: LocalFolderName, inBody: LocalBody, inDataPK: LocalDataPK }).then(PromiseData => {
    //     res.end(JSON.stringify(PromiseData));
    // }).catch();

});

router.post('/DataOnly/:FolderName', function (req, res, next) {
    let LocalDataPK = req.KeshavSoft.DataPk;
    let LocalFolderName = req.params.FolderName;
    let LocalBody = req.body;
  //  console.log("Bulk-----------", LocalBody);
    Repos.DataOnly({ inToName: LocalFolderName, inBody: LocalBody, inDataPK: LocalDataPK }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();

});

router.post('/FileWithDataOnly/:FolderName', CommonFromController.FileWithDataOnly);

module.exports = router;