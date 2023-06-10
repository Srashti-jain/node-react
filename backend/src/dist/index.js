"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes/routes");
var app = express_1["default"]();
var PORT = 3000;
app.use('/', routes_1.router);
app.get('/test', function (req, resp) {
    resp.json({ data: "test page" });
});
app.listen(PORT, function () {
    console.log('server started ${PORT}');
});
