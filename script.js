document.getElementById('menu').onclick = function () {
    var topnav = document.getElementById('myTopnav');
    topnav.classList.toggle('responsive'); // Переключаем класс, если его нет или он есть
};

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  // Показываем меню
    } else {
        menu.style.display = "none";  // Скрываем меню
    }
}


