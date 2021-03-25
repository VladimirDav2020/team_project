//menu
const btnMenu = document.querySelector('.btn-menu');
const menuBlock = document.querySelector('.menu-block');
const overlayBlock = document.querySelector('#overlay');
const bodyEl = document.body;

// нажатие на кнопку menu   
btnMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    menuBlock.classList.toggle('active');
    overlayBlock.classList.toggle('active');
})
// Клик по мобильному меню
menuBlock.addEventListener('click', function(){
    this.classList.remove('active');
    btnMenu.classList.remove('active');
    overlayBlock.classList.remove('active');
});
// Клик по мобильному меню
overlayBlock.addEventListener('click', function(){
    this.classList.remove('active');
    btnMenu.classList.remove('active');
    menuBlock.classList.remove('active');
});
// Закрытие мобильного меню при ресайзе
window.addEventListener('resize', function(){
    menuBlock.classList.remove('active');
    btnMenu.classList.remove('active');
    overlayBlock.classList.remove('active');
});
