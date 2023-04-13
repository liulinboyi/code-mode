"use strict";
// test
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const c = new index_1.Creater();
try {
    console.assert(c.create('苹果') instanceof index_1.Product);
    console.assert(c.create('香蕉') instanceof index_1.Product);
    console.log("passed");
}
catch (error) {
    console.error(error, "not passed");
}
