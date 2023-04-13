/**
 * 工厂模式
 * factory mode
 */
export class Product implements InterProduct {
    name: string
    constructor(name: string) {
        this.name = name
    }

    fn1() {
        console.warn("fn1")
    }

    fn2() {
        console.warn("fn2")
    }
}


// factory
export class Creater implements InterCteater {
    create(name: string): Product {
        return new Product(name)
    }
}

