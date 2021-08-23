import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';
import modal from './modal.js';
import closeModalBg from './closeBg.js';
import calc from './calc.js';

const modalCall = document.querySelectorAll('.modal-call'),
      body = document.querySelector('body');
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
    slidesPerView: 4,
    freeMode: false,
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
})

function checkClassSlider(){
    if(body.classList.contains('swiper-container')){
        const swiperBalcon = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: false,
            thumbs:{
                swiper: swiperBalconMin,
            }
        });
    }else{
        return;
    }
}

checkClassSlider();
modalCall.forEach(btn => {
    // console.log(btn);
    modal(btn, '.close');
})
closeModalBg('.modal-bg');
calc();
