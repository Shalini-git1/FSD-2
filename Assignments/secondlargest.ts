let numbers = [98, 79, 56, 47, 600];

let largestNumber = numbers[0]!;
let secondLargestNumber = numbers[0]!;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index]! > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = numbers[index]!;
    } else if (numbers[index]! > secondLargestNumber && numbers[index]! !== largestNumber) {
        secondLargestNumber = numbers[index]!;
    }
}

console.log("Second Largest =", secondLargestNumber);