// script.js

// Пример анимации при нажатии на кнопку "Подробнее"
const moreButtons = document.querySelectorAll('a[href="/page"]');
moreButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        // Ваш код анимации или перехода на другую страницу
        console.log('Кнопка "Подробнее" нажата!');
    });
});

// Другие скрипты и интерактивные элементы можно добавить аналогично
