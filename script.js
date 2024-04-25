// Создаем модальное окно для каждой секции
document.querySelectorAll('section').forEach(section => {
    // Создаем элементы модального окна
    const modal = document.createElement('div');
    const content = document.createElement('div');
    const close = document.createElement('span');
    const text = document.createElement('p');

    // Устанавливаем стили и содержимое элементов
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.overflow = 'auto';
    modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
    content.style.backgroundColor = '#fefefe';
    content.style.margin = '15% auto';
    content.style.padding = '20px';
    content.style.border = '1px solid #888';
    content.style.width = '80%';
    close.textContent = 'x';
    close.style.color = '#aaa';
    close.style.float = 'right';
    close.style.fontSize = '28px';
    close.style.fontWeight = 'bold';
    close.style.cursor = 'pointer';
    text.textContent = '...сюда нужно добавить дополнительную информацию...';

    // Добавляем обработчики событий
    section.querySelector('button').addEventListener('click', () => {
        modal.style.display = 'block';
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Добавляем элементы на страницу
    content.appendChild(close);
    content.appendChild(text);
    modal.appendChild(content);
    document.body.appendChild(modal);
});
