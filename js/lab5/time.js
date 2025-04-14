function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const clock = document.getElementById('clock');
    clock.innerHTML = `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;

    const secondsEl = clock.querySelector('.seconds');
    secondsEl.style.opacity = '0';

    setTimeout(() => {
        secondsEl.style.opacity = '1';
    }, 200); // мигтіння
}

setInterval(updateClock, 1000);

function startCountdown() {
    const target = new Date(document.getElementById('countdownTarget').value);
    const countdownEl = document.getElementById('countdown');

    const timer = setInterval(() => {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
            countdownEl.innerText = 'Час вичерпано!';
            clearInterval(timer);
            return;
        }
        const hours = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        countdownEl.innerText = `Залишилось: ${hours}г ${mins}х ${secs}с`;
    }, 1000);
}


document.getElementById('calendarInput').addEventListener('change', function () {
    const [year, month] = this.value.split('-').map(Number);
    const days = new Date(year, month, 0).getDate();
    let html = `<strong>${month}.${year}</strong><br>`;
    for (let i = 1; i <= days; i++) html += i + ' ';
    document.getElementById('calendar').innerHTML = html;
});


function calcUntilBirthday() {
    const bday = new Date(document.getElementById('birthday').value);
    const now = new Date();
    bday.setFullYear(now.getFullYear());
    if (bday < now) bday.setFullYear(now.getFullYear() + 1);

    const diff = bday - now;
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('birthdayCountdown').innerText =
        `До ДН: ${months} міс, ${days} дн, ${hours} год, ${minutes} хв, ${seconds} с`;
}