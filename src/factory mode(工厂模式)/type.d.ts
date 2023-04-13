interface InterProduct {
    name: string
    fn1: () => void
    fn2: () => void
}


interface InterCteater {
    create(name: string): Product
}
