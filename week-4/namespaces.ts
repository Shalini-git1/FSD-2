namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }
}

console.log(Calculator.add(10, 20));
console.log(Calculator.multiply(5, 6));