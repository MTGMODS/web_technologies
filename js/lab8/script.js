document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('nav ul');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('show');

        // Анімація бургер-іконки
        if (navMenu.classList.contains('show')) {
            burger.classList.add('open');
        } else {
            burger.classList.remove('open');
        }
    });

    // Закриваємо меню при кліку на пункт
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('show');
            burger.classList.remove('open');
        });
    });
});