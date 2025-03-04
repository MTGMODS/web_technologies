function sumFibonacci() {
    let a = 0, b = 1, sum = 0, count = 0;

    while (count < 10) {
        sum += a;
        [a, b] = [b, a + b];
        count++;
    }

    console.log("1: Сума перших 10 чисел Фібоначчі:", sum);
}
sumFibonacci();
