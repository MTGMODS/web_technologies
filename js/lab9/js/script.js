document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        const country = document.getElementById('country');
        const city = document.getElementById('city');

        country.addEventListener('change', function () {
            city.disabled = false;
            city.innerHTML = '';

            const cityOptions = {
                ua: ['Київ', 'Львів', 'Одеса'],
                pl: ['Варшава', 'Краків', 'Вроцлав']
            };

            const selected = cityOptions[this.value] || [];
            selected.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c;
                opt.textContent = c;
                city.appendChild(opt);
            });
        });

        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const isValid = validateSignupForm();
            if (isValid) {
                document.getElementById('signupMessage').textContent = "Успішна реєстрація!";
                signupForm.reset();
                city.disabled = true;
                clearValidationStyles(signupForm);
            }
        });

        Array.from(signupForm.elements).forEach(el => {
            el.addEventListener('input', () => validateField(el));
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername');
            const password = document.getElementById('loginPassword');

            let valid = true;

            if (username.value.trim() === '') {
                setError(username, 'loginUsernameError', 'Введіть ім’я користувача');
                valid = false;
            } else {
                clearError(username, 'loginUsernameError');
            }

            if (password.value.length < 6) {
                setError(password, 'loginPasswordError', 'Пароль мінімум 6 символів');
                valid = false;
            } else {
                clearError(password, 'loginPasswordError');
            }

            if (valid) {
                document.getElementById('loginMessage').textContent = "Успішний вхід!";
                loginForm.reset();
                clearValidationStyles(loginForm);
            }
        });
    }
});

function validateSignupForm() {
    let valid = true;

    const fields = [
        { id: 'firstName', check: v => v.length >= 3 && v.length <= 15, msg: 'Від 3 до 15 символів' },
        { id: 'lastName', check: v => v.length >= 3 && v.length <= 15, msg: 'Від 3 до 15 символів' },
        { id: 'email', check: v => /^[^@]+@[^@]+\.[^@]+$/.test(v), msg: 'Невірний email' },
        { id: 'password', check: v => v.length >= 6, msg: 'Мінімум 6 символів' },
        { id: 'confirmPassword', check: v => v === document.getElementById('password').value, msg: 'Паролі не збігаються' },
        { id: 'phone', check: v => /^\+380\d{9}$/.test(v), msg: 'Формат +380XXXXXXXXX' },
        { id: 'birthDate', check: checkBirthDate, msg: 'Некоректна дата народження' },
        { id: 'sex', check: v => v !== '', msg: 'Оберіть стать' },
        { id: 'country', check: v => v !== '', msg: 'Оберіть країну' },
        { id: 'city', check: v => v !== '', msg: 'Оберіть місто' },
    ];

    fields.forEach(f => {
        const input = document.getElementById(f.id);
        if (!f.check(input.value)) {
            setError(input, `${f.id}Error`, f.msg);
            valid = false;
        } else {
            clearError(input, `${f.id}Error`);
        }
    });

    return valid;
}

function checkBirthDate(value) {
    const birth = new Date(value);
    const now = new Date();
    const age = now.getFullYear() - birth.getFullYear();
    return birth <= now && age >= 12;
}

function validateField(field) {
    field.classList.remove('valid', 'invalid');
    if (field.checkValidity()) {
        field.classList.add('valid');
    } else {
        field.classList.add('invalid');
    }
}

function setError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;
    input.classList.add('invalid');
    input.classList.remove('valid');
}

function clearError(input, errorId) {
    document.getElementById(errorId).textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
}

function clearValidationStyles(form) {
    Array.from(form.elements).forEach(el => {
        el.classList.remove('valid', 'invalid');
    });
}

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
}
