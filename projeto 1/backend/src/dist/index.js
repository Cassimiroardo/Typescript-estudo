"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var routes_1 = __importDefault(require("./routes"));
var port = 3333;
var app = express();
app.use(cors());
app.use(routes_1.default);
app.listen(port, function (_) {
    console.log("server running on port: " + port);
});
