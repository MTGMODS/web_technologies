const lights = document.querySelectorAll('.light');
const stateText = document.getElementById('stateText');

let durations = {
    red: 5000,
    yellow: 3000,
    green: 7000
};

let current = 0;
const states = ['red', 'yellow', 'green', 'yellowBlink'];

function updateLight(state) {
    lights.forEach(l => l.classList.remove('active'));
    stateText.innerText = state === 'yellowBlink' ? 'Жовтий (миготливий)' : state;

    if (state === 'yellowBlink') {
        let blinkCount = 0;
        const blinkInterval = setInterval(() => {
            lights[1].classList.toggle('active');
            blinkCount++;
            if (blinkCount >= 6) {
                clearInterval(blinkInterval);
                startCycle('red');
            }
        }, 500);
    } else {
        const index = { red: 0, yellow: 1, green: 2 }[state];
        lights[index].classList.add('active');
        setTimeout(() => {
            const nextIndex = (states.indexOf(state) + 1) % states.length;
            startCycle(states[nextIndex]);
        }, durations[state]);
    }
}

function startCycle(state = 'red') {
    updateLight(state);
}

function nextLight() {
    current = (current + 1) % states.length;
    updateLight(states[current]);
}

function setDurationsFromUser() {
    for (let key in durations) {
        let val = prompt(`Введіть тривалість для ${key} (мс)`, durations[key]);
        if (val) durations[key] = parseInt(val);
    }
}

setDurationsFromUser();
startCycle();
