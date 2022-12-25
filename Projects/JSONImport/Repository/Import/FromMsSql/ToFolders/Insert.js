//let Dal = require("../../../../../../Dal/AdminApi/Utility/Json/Folder/FromMsSql/Insert");
let Dal = require("../../../../Dal/Import/FromMsSql/ToFolders/Insert");

exports.Bulk = async ({ inToName, inBody, inDataPK }) => {
    return await Dal.Bulk({ inToName, inBody, inDataPK });
};

exports.DataOnly = async ({ inToName, inBody, inDataPK }) => {
    return await Dal.DataOnly({ inToName, inBody, inDataPK });
};

exports.FileWithDataOnly = async ({ inFolderName, inBody, inDataPK }) => {
    return await Dal.FileWithDataOnly({ inFolderName, inBody, inDataPK });
};
