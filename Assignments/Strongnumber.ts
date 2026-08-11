let inputNumber = 565;
let temporaryNumber = inputNumber;
let factorialSum = 0;

while (temporaryNumber > 0) {
    let digit = temporaryNumber % 10;
    let factorial = 1;

    for (let count = 1; count <= digit; count++) {
        factorial *= count;
    }

    factorialSum += factorial;
    temporaryNumber = Math.floor(temporaryNumber / 10);
}

console.log(factorialSum === inputNumber ? "Strong" : "Not Strong");