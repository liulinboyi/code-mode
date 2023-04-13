"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creater = exports.Product = void 0;
/**
 * 工厂模式
 * factory mode
 */
class Product {
    constructor(name) {
        this.name = name;
    }
    fn1() {
        console.warn("fn1");
    }
    fn2() {
        console.warn("fn2");
    }
}
exports.Product = Product;
// factory
class Creater {
    create(name) {
        return new Product(name);
    }
}
exports.Creater = Creater;
