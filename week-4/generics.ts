function showValue<T>(value: T): T {
    return value;
}

console.log(showValue<number>(100));
console.log(showValue<string>("TypeScript"));

export {};