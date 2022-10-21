const menu = document.querySelector('.bx-menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    navbar.classList.toggle('hide');
})