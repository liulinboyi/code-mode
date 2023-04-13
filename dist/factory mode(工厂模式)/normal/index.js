"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creater = exports.Product2 = exports.Product1 = void 0;
class Product1 {
    constructor(name) {
        this.name = name;
    }
    fn1() {
        console.log("");
    }
    fn2() {
        console.log();
    }
}
exports.Product1 = Product1;
class Product2 {
    constructor(name) {
        this.name = name;
    }
    fn1() {
        console.log("");
    }
    fn2() {
        console.log();
    }
}
exports.Product2 = Product2;
class Creater {
    // Dependency inversion principle
    // Dependence on abstraction
    // Dependence on Interface 
    // Do not Dependence on specific
    create(type, name) {
        // add a logic when create a instance
        // put the factory logic on the inner for everyone can use the same
        // create method
        if (type === 'p1') {
            return new Product1(name);
        }
        if (type === 'p2') {
            return new Product2(name);
        }
        throw new Error("has no type matched!");
    }
}
exports.Creater = Creater;
