'use strict'

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(function(e) {
    e.addEventListener('click', headerChangeActive);
});

function headerChangeActive(evt) {
    const linkTarget = evt.currentTarget;

    menuLinks.forEach(function(e) {
        e.classList.remove('menu__link--active');
    });

    linkTarget.classList.add('menu__link--active');
}

const portfolioBtns = document.querySelectorAll('.portfolio__btn');

portfolioBtns.forEach(function(e) {
    e.addEventListener('click', portfolioChangeActive);
});

function portfolioChangeActive(evt) {
    const portfolioMenuTarget = evt.currentTarget;

    portfolioBtns.forEach(function(e) {
        e.classList.remove('portfolio__btn--active');
    });

    portfolioMenuTarget.classList.add('portfolio__btn--active');
}

const expertiseLine = document.querySelectorAll('.expertise__content-item-line');
const expertiseNum = document.querySelectorAll('.expertise__content-item-num');

expertiseLine.forEach(function(e) {
    e.classList.add('expertise__content-item-line--active')
});