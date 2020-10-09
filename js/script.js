'use strict'

window.addEventListener('scroll', function() {
    let windowCurrent = this;
    
    // Добавление/удаление анимации для блоков
    [...document.querySelectorAll('.fade-block')].map(blocks => {
        if (windowCurrent.scrollY > (blocks.offsetTop - 500)) {
            [...blocks.querySelectorAll('[class*=fade-block__item]')].map(block => {
                block.classList.add('fade-block__item--within');
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let menuBtn = document.querySelector('.header-nav__button');

    menuBtn.onclick = () => {
        if (!menuBtn.classList.contains('header-nav__button--close')) {
            menuBtn.classList.add('header-nav__button--close');
            document.querySelector('.header-nav').style.display = 'block';
        } else  {
            menuBtn.classList.remove('header-nav__button--close');
            document.querySelector('.header-nav').style.display = 'none';
        }
    }

    document.onclick = (e) => {
        if (!e.target.classList.contains('header-nav__button') && document.documentElement.clientWidth < 991) {
            menuBtn.classList.remove('header-nav__button--close');
            document.querySelector('.header-nav').style.display = 'none';
        }
    }
})