import {Swiper, Navigation} from "swiper"

Swiper.use(Navigation);

let smiSlider = new Swiper('.smi__slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: '.smi__slide-arrow--next',
      prevEl: '.smi__slide-arrow--prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      }
    }
});