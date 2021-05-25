let burger = document.querySelector('.header_burger');
let menu = document.querySelector('.header_menu');
let body = document.querySelector('body');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
}