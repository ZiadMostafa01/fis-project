const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn'); 
const sideBar = document.querySelector('.left-side');

menuBtn.addEventListener('click', () => {
    sideBar.classList.add('active'); 
});
closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('active');
});