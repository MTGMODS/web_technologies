function sumPrimes() {
    let sum = 0;

    for (let i = 2; i <= 1000; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sum += i;
        }
    }

    console.log("2: Сума всіх простих чисел від 1 до 1000:", sum);
}
sumPrimes();
