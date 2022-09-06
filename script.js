const menuBtn = document.getElementById('menu-button');
const nav = document.querySelector('nav');


menuBtn.addEventListener('click', () => {  
    if(nav.classList.contains('visible')) {
        nav.classList.remove('visible');
        menuBtn.innerHTML = '<img src="images/icon-hamburger.svg" alt="">';
    }else {
        nav.classList.add('visible')
        menuBtn.innerHTML = '<img src="images/icon-close.svg" alt="">';
    } 
})
window.addEventListener('scroll', () => {
    nav.style.top = `${window.scrollY}px`; 
    menuBtn.style.top = `${window.scrollY + 10}px` 
}) 