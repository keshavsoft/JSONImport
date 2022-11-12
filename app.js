let CommonProjectNameForJSONImport = "JSONImport";
let CommonProjectNameForJSONApi = "JSONApi";
let CommonProjectNameForJSONAdminApi = "JSONAdminApi";
let commonProjectNameForJSONUser = "JSONUser";

require('dotenv').config()

const express = require('express');
var path = require('path');

const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var port = normalizePort(process.env.PORT || '4119');

let SubRouteJSONImport = require(`./Projects/${CommonProjectNameForJSONImport}/Routes`);
//let SubRouteJSONApi = require(`./Projects/${CommonProjectNameForJSONApi}/Routes`);
//let SubRouteJSONAdminApi = require(`./Projects/${CommonProjectNameForJSONAdminApi}/Routes`);
let SubRouteJSONUser = require(`./Projects/${commonProjectNameForJSONUser}/Routes`);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    //console.log("ssssssss : ", process.env.NODE_ENV);
    console.log("process.env : ", process.env.KS_EMAIL_PASS);
    res.sendFile(path.join(__dirname + `/Html/JSONProject.html`));
});


//app.use("/JSONUser", SubRouteJSONUser);
//app.use("/JSONApi", cors({ origin: '*' }), SubRouteJSONProject);
app.use(`/${CommonProjectNameForJSONImport}`, SubRouteJSONImport);
//app.use(`/${CommonProjectNameForJSONApi}`, SubRouteJSONApi);
//app.use(`/${CommonProjectNameForJSONAdminApi}`, SubRouteJSONAdminApi);
app.use(`/${commonProjectNameForJSONUser}`, SubRouteJSONUser);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});