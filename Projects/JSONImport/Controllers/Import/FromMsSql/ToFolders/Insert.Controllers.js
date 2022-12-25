//let Repos = require("../../../../Repository/Import/FromMsSql/Insert/");
let Repos = require("../../../../Repository/Import/FromMsSql/ToFolders/Insert");

let FileWithDataOnly = async (req, res) => {
    let LocalBody = req.body;
    let LocalFolderName = req.params.FolderName;
    let LocalFileNameWithExtension = `${req.params.inFileNameWithExtension}.json`;
    let LocalDataPK = req.KeshavSoft.DataPk;

    let Result = await Repos.FileWithDataOnly({
        inFolderName: LocalFolderName,
        inBody: LocalBody,
        inFileNameWithExtension: LocalFileNameWithExtension,
        inDataPK: LocalDataPK
    });
    console.log('Result------------ : ', Result);
    res.json(Result);
};

module.exports = { FileWithDataOnly };