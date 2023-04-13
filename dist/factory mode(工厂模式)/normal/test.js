"use strict";
// test
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const c = new index_1.Creater();
try {
    console.assert(c.create('p1', '苹果') instanceof index_1.Product1);
    console.assert(c.create('p2', '香蕉') instanceof index_1.Product2);
    console.log("passed");
}
catch (error) {
    console.error(error, "not passed");
}
