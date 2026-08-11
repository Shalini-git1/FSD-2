let values = [10, 11, 13, 16, 18];
let rotations = 2;

for (let rotation = 0; rotation < rotations; rotation++) {
    let firstElement = values.shift();
    values.push(firstElement!);
}

console.log(values);