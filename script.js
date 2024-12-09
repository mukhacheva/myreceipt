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

const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const main = document.querySelector('.main'); 

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    main.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    main.classList.remove('active');
});

document.querySelector('.signin-link').addEventListener('click', function() {
    formBox.classList.remove('active');
    main.classList.remove('active');
});

document.querySelector('.signup-link').addEventListener('click', function() {
    formBox.classList.add('active');
    main.classList.add('active');
});



