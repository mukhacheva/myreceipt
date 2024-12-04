document.getElementById('menu').onclick = function () {
    var topnav = document.getElementById('myTopnav');
    topnav.classList.toggle('responsive'); 
};

function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  
    } else {
        menu.style.display = "none";  
    }
}

document.addEventListener("click", function (event) {
    const menus = document.querySelectorAll('.dropdown-menu');
    menus.forEach(menu => {
        if (!menu.contains(event.target) && !menu.previousElementSibling.contains(event.target)) {
            menu.style.display = "none"; 
        }
    });
});
