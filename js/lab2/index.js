console.log('\n1:')

function findMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {min, max};
}

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}


const my_numbers = [3, 9, -1, 25, 8];
let result = findMinMax(my_numbers);
console.log(`Мінімум: ${result.min}, Максимум: ${result.max}`);


function compareObjects(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return "Об'єкти рівні";
    } else {
        return "Об'єкти різні";
    }
}

let person1 = { name: 'John', age: 30 };
let person2 = { name: 'John', age: 30 };
let person3 = { name: 'Alice', age: 25 };

console.log(compareObjects(person1, person2));
console.log(compareObjects(person1, person3));


console.log('\n2:')

function isInRange(num, min, max) {
    return num >= min && num <= max;
}

console.log("входження: " + isInRange(5, 1, 10));


let checker = false;
console.log("checker: " + checker);
checker = !checker;
console.log("checker: " + checker);

console.log("\n3:");
function balls_to_world(balls) {
    if (balls >= 90) {
        return balls + " - Відмінно";
    } else if (balls >= 75) {
        return balls + " - Добре";
    } else if (balls >= 50) {
        return balls + " - Задовільно";
    } else {
        return balls + " - Незадовільно";
    }
}
console.log(balls_to_world(95));
console.log(balls_to_world(80));
console.log(balls_to_world(60));
console.log(balls_to_world(40));

console.log('\n')

function getSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return month + " - Зима";
    } else if (month >= 3 && month <= 5) {
        return month + " - Весна";
    } else if (month >= 6 && month <= 8) {
        return month + " - Літо";
    } else if (month >= 9 && month <= 11) {
        return month + " - Осінь";
    } else {
        return month + " - Невірний місяць";
    }
}

console.log(getSeason(1));
console.log(getSeason(5));
console.log(getSeason(11));

function getSeasonUsingTernary(month) {
    return (month === 12 || month === 1 || month === 2) ? month + " - Зима" :
        (month >= 3 && month <= 5) ? month + " - Весна" :
            (month >= 6 && month <= 8) ? month + " - Літо" :
                (month >= 9 && month <= 11) ? month + " - Осінь" : "Невірний місяць";
}
console.log(getSeasonUsingTernary(3));
console.log(getSeasonUsingTernary(8));
console.log(getSeasonUsingTernary(12));
