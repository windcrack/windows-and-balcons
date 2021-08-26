import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
import modal from './modal.js';
import closeModalBg from './closeBg.js';
import calc from './calc.js';

const modalCall = document.querySelectorAll('.modal-call'),
      body = document.querySelector('body');
const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

    });
const swiperBalconMin = new Swiper('.balcon-min-slider',{
    slidesPerView: 4,
    slidesPerGroup: 1,
    freeMode: false,
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 30,
})

const swiperBalcon = new Swiper('.balcon-slider', {
    loop: false,
    // spaceBetween: 5,
    thumbs:{
        swiper: swiperBalconMin,
    }
});

// checkClassSlider();
modalCall.forEach(btn => {
    modal(btn, '.close');
})
closeModalBg('.modal-bg');
calc();
