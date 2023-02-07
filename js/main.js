// mobile menu
const hambuger = document.querySelector('#hambuger');
const menu = document.querySelector('#mobile-menu');
const closed = document.querySelector('#close');
const navitem = document.querySelectorAll('.nav-item');

hambuger.addEventListener('click', () => {
    menu.classList.add('show-menu');
});

closed.addEventListener('click', () => {
    menu.classList.remove('show-menu');
});

navitem.forEach((n) => n.addEventListener('click', () => menu.classList.remove('show-menu')));

// toggle cards for speakers
const more = document.querySelector('#more');
const speakercards = document.querySelector('.disappear');
const morebtn = document.querySelector('.before-expand');
const lessbtn = document.querySelector('.after-expand');

more.addEventListener('click', (e) => {
    e.preventDefault();
    speakercards.classList.toggle('disappear');
    lessbtn.classList.toggle('after-expand');

    if (morebtn.style.display === "none") {
        morebtn.style.display = "block";
      } else {
        morebtn.style.display = "none";
      }
});

