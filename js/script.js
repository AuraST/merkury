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