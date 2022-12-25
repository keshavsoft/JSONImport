//let CommonConfigBulk = require("../../../../../../../../DataSupply/Fs/Config/Folders/Insert/Bulk");
let CommonConfigBulk = require("../../../../../../DataSupply/Fs/Config/Folders/Insert/Bulk");
let CommonFromCreateMultipleFiles = require("../../../../../../DataSupply/Fs/Config/JSONFolder/DataPkAsFolder/DataFolder/UserFolder/Bulk/CreateMultipleFiles");

let Bulk = async ({ inToName, inBody, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonConfigBulk.Insert({ inToName, inBody, inUserPK: inDataPK });;
    };
};

let DataOnly = async ({ inToName, inBody, inDataPK }) => {
    if (inDataPK > 0) {
        return await CommonConfigBulk.InsertToDataOnly({ inToName, inBody, inUserPK: inDataPK });;
    };
};

let FileWithDataOnly = async ({ inFolderName, inBody, inDataPK }) => {
  //  console.log("ssssssss : ", inFolderName, inBody, inDataPK);
    if (inDataPK > 0) {
        return await CommonFromCreateMultipleFiles.StartFunc({
            inFolderName,
            inData: inBody,
            inDataPK
        });;
    };
};


module.exports = {
    Bulk,
    DataOnly,
    FileWithDataOnly
};