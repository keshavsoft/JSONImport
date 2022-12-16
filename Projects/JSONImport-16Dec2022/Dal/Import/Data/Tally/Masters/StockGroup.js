//let CommonFromXml = require("");
let CommonTally = require("../../../../../../Tally/Bulk/Insert/Masters/Start");

let FromXml = async ({ LocalUserPK, inFolderName, inFileName, inBodyData }) => {
    if (LocalUserPK > 0) {
        let LocalFromTally = await CommonTally.FromPowerShell({
            inFolderName,
            inFileName,
            inBody: inBodyData,
            inUserPK: LocalUserPK
        });
        console.log("LocalFromTally : ", LocalFromTally);
        return await LocalFromTally;
    };
};

module.exports = {
    FromXml
};


