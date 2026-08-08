// Функция переключения секций
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
    
    // Обновляем URL без перезагрузки (имитация hash-навигации)
    history.pushState(null, '', `#${sectionId}`);
}

// Данные меню (замени на реальные данные с nastoechnay.ru)
const menuData = [
    {
        name: "Хреновуха Классическая",
        description: "На зерновом дистилляте с корнем хрена и медом",
        price: "350 ₽",
        volume: "0.5л"
    },
    {
        name: "Перцовка",
        description: "Жгучая настойка на перце и специях",
        price: "350 ₽",
        volume: "0.5л"
    },
    {
        name: "Клюковка",
        description: "Сладкая настойка на свежей клюкве",
        price: "300 ₽",
        volume: "0.5л"
    }
];

// Генерация меню при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menu-list');
    
    menuData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price} <span style="font-size: 0.8rem; opacity: 0.6">/ ${item.volume}</span></p>
        `;
        menuList.appendChild(div);
    });

    // Проверяем хеш в URL при загрузке
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});