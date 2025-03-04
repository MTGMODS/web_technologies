function filterOddLengthStrings(arr) {
    return arr.filter(str => str.length % 2 !== 0);
}

const strings = ["apple", "banana", "kiwi", "peach", "grape"];
console.log("4: Масив рядків з непарною довжиною:", filterOddLengthStrings(strings));
