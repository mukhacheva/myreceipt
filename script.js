document.getElementById('menu').onclick = function () {
    var topnav = document.getElementById('myTopnav');
    topnav.classList.toggle('responsive'); // Переключаем класс, если его нет или он есть
};

// Универсальная функция для переключения видимости меню
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    
    // Если меню скрыто или не видно, показываем его
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  // Показываем меню
    } else {
        menu.style.display = "none";  // Скрываем меню
    }
}

// Для закрытия меню при клике вне его
document.addEventListener("click", function (event) {
    const menus = document.querySelectorAll('.dropdown-menu');
    menus.forEach(menu => {
        if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
            menu.style.display = "none"; // Скрываем меню
        }
    });
});
