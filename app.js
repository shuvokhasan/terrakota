const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

menu.addEventListener('click', hamburger);

function hamburger(){
    nav.classList.toggle('wi');
    // menu.classList.toggle('hidden');

    console.log(1);
}