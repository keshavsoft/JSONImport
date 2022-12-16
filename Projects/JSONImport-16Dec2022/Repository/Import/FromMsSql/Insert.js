//let Dal = require("../../Dal/AdminApi/Utility/Json/File/FromMsSql/Insert");
let Dal = require("../../../Dal/Import/FromMsSql/Insert");

exports.BulkWithFileNameToDataOnly = async ({ inFolderName, inFileNameWithExtension, inBody, inUserPK }) => {
    return await Dal.BulkWithFileNameToDataOnly({ inFolderName, inFileNameWithExtension, inBody, inUserPK });
};
