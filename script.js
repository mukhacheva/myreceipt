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

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".knopka");
    const dropdownMenu = document.querySelector("#dropdownMenu");

    // Функция для переключения видимости меню
    function toggleMenu() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    }

    // Открытие/закрытие меню по клику на кнопку
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Останавливаем всплытие события, чтобы клик не сработал на document
        toggleMenu();
    });

    // Закрытие меню при клике вне его
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !button.contains(event.target)) {
            dropdownMenu.style.display = "none"; // Скрываем меню
        }
    });
});

