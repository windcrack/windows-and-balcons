import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
import modal from './modal.js';
import closeModalBg from './closeBg.js';
import calc from './calc.js';

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
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
const swiperBalconMin = new Swiper('.balcon-min',{
    direction: 'horizontal',
    slidesPerView: 1,
    freeMode: false,
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
})

// const swiperBalcon = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: false,
//     thumbs:{
//         swiper: swiperBalconMin,
//     }
// });

modal('.button_green', '.close');
modal('.modal_call', '.close');
modal('.modal_call_ring', '.close');
closeModalBg('.modal-bg');
calc();
