// Any

let value: any = 10;
console.log(value);

value = "Hello";
console.log(value);

// Unknown

let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

// Void

function greet(): void {
    console.log("Welcome");
}

greet();