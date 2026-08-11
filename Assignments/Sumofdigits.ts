let inputValue = 9849;
let digitSum = 0;

while (inputValue > 0) {
    let currentDigit = inputValue % 10;
    digitSum += currentDigit;
    inputValue = Math.floor(inputValue / 10);
}

console.log("Sum of Digits =", digitSum);