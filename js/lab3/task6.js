function isSumOrDifferenceTen(a, b) {
    return a + b === 10 || Math.abs(a - b) === 10;
}

console.log("Результат перевірки для 7 і 3:", isSumOrDifferenceTen(7, 3));
console.log("Результат перевірки для 6 і 3:", isSumOrDifferenceTen(6, 3));
