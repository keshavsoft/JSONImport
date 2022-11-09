let Dal = require("../../../../Dal/Validate/Users/InUserGroupsJson/ForCredentials")

exports.ForUserPasswordFirm = async ({ inUserName, inPassWord, inFirmName }) => {

  // console.log("repo : ", inUserName, inPassword, inFirmName);


   return await Dal.ForUserPasswordFirm({ inUserName, inPassWord, inFirmName });
};
