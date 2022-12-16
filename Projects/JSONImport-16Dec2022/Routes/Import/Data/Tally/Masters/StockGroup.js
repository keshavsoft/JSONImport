
let express = require("express");
let router = express.Router();
let Repository = require("../../../../../Repository/Import/Data/Tally/Masters/StockGroup");
let xmlparser = require("express-xml-bodyparser");

router.post('/', xmlparser({ trim: false, explicitArray: false }), (req, res) => {
    let LocalBody = req.body;
    let LocalDataPk = req.KeshavSoft.DataPk;

    let LocalFolderName = req.headers.foldername;
    let LocalFileName = req.headers.filename;
    
    Repository.FromXml({
        LocalUserPK: LocalDataPk,
        inFolderName: LocalFolderName,
        inFileName: LocalFileName,
        inBodyData: LocalBody
    }).then(PromiseData => {
        res.end(JSON.stringify(PromiseData));
    }).catch();

});

module.exports = router;