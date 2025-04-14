const lamp = document.getElementById('lamp');
const lampType = document.getElementById('lampType');

let isOn = false;
let timeoutId = null;


lampType.addEventListener('change', () => {
    const type = lampType.value;
    lamp.style.backgroundImage = `url(${type}.png)`;
});


function toggleLamp() {
    isOn = !isOn;
    lamp.classList.toggle('on', isOn);
    lamp.classList.toggle('off', !isOn);


    clearTimeout(timeoutId);
    if (isOn) {
        timeoutId = setTimeout(() => {
            isOn = false;
            lamp.classList.remove('on');
            lamp.classList.add('off');
            alert("Лампочка вимкнулась через бездіяльність");
        }, 5 * 60 * 1000);
    }
}


function setBrightness() {
    const value = prompt("Введіть яскравість (10–100%)", "100");
    const brightness = parseInt(value);
    if (!isNaN(brightness) && brightness >= 10 && brightness <= 100) {
        lamp.style.filter = `brightness(${brightness}%)`;
    } else {
        alert("Некоректне значення");
    }
}
