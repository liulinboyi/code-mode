// test

import { Creater, Product } from "./index";

const c = new Creater()
try {
    console.assert(c.create('苹果') instanceof Product)
    console.assert(c.create('香蕉') instanceof Product)
    console.log("passed")
} catch (error) {
    console.error(error, "not passed")
}

