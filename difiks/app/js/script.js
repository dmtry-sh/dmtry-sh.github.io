'use strict';

function nextSlide() {
    if (currSlide < 3) {
        currSlide++;
        container.style.left = - currSlide * offset + 'px';
        prev.style.borderColor = 'transparent #000 transparent transparent';
    }
    if (currSlide == 3) {
        next.style.borderColor = 'transparent transparent transparent #8798ab';
    }
}

function prevSlide() {
    if (currSlide > 0) {
        currSlide--;
        container.style.left = - currSlide * offset + 'px';
        prev.style.borderColor = 'transparent #000 transparent transparent';
        next.style.borderColor = 'transparent transparent transparent #000';
    }
    if (currSlide == 0) {
        prev.style.borderColor = 'transparent #8798ab transparent transparent';
    }
}

let currSlide = 0;
const container = document.querySelector('.slider__container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let offset = container.parentNode.offsetWidth;

prev.addEventListener('click', () => {
    prevSlide();
});

next.addEventListener('click', () => {
    nextSlide();
});

let scrollListener = new WheelIndicator({
    elem: document,
    callback: (e) => {
        if (e.direction === 'down') {
            nextSlide();
        }
        if (e.direction === 'up') {
            prevSlide();
        }
    }
})
