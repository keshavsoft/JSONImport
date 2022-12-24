let Repos = require("../../../Repository/Import/FromMsSql/Insert");

let BulkWithFileNameToDataOnlyResult = async (req, res) => {
    let LocalBody = req.body;
    let LocalFolderName = req.params.inFolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;

    let Result = await Repos.BulkWithFileNameToDataOnly({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inUserPK: req.KeshavSoft.DataPk
    });
    console.log('Result : ', Result);
    res.json(Result);
};

module.exports = { BulkWithFileNameToDataOnlyResult };