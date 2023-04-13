interface IProduce {
    name: string
    fn1: () => void
    fn2: () => void
}



export class Product1 implements IProduce {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        console.log("");
    }
    fn2() {
        console.log();
    }
}

export class Product2 implements IProduce {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    fn1() {
        console.log("");
    }
    fn2() {
        console.log();
    }
}


export class Creater {
    // Dependency inversion principle
    // Dependence on abstraction
    // Dependence on Interface 
    // Do not Dependence on specific
    create(type: 'p1' | 'p2', name: string): IProduce {
        // add a logic when create a instance
        // put the factory logic on the inner for everyone can use the same
        // create method
        if (type === 'p1') {
            return new Product1(name)
        }
        if (type === 'p2') {
            return new Product2(name)
        }
        throw new Error("has no type matched!")
    }
}

