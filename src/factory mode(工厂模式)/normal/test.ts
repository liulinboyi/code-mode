// test

import { Creater, Product1, Product2 } from "./index";

const c = new Creater()
try {
    console.assert(c.create('p1','苹果') instanceof Product1)
    console.assert(c.create('p2', '香蕉') instanceof Product2)
    console.log("passed")
} catch (error) {
    console.error(error, "not passed")
}

