function getDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Понеділок");
            break;
        case 2:
            console.log("Вівторок");
            break;
        case 3:
            console.log("Середа");
            break;
        case 4:
            console.log("Четвер");
            break;
        case 5:
            console.log("П'ятниця");
            break;
        case 6:
            console.log("Субота");
            break;
        case 7:
            console.log("Неділя");
            break;
        default:
            console.log("Невірне число. Введіть число від 1 до 7.");
    }
}
console.log("3:");
getDayOfWeek(5);
