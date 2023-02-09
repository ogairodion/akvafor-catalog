import $ from "jquery"
import {Swiper, Navigation} from "swiper"

Swiper.use(Navigation);

let windowWidth = $(window).width();

if (windowWidth <= 991) {
    $('.clients__items').addClass('swiper-container');
    $('.clients__items-wrapper').addClass('swiper-wrapper');
    $('.clients__item').addClass('swiper-slide');
    let clientsSlider = new Swiper('.clients__items', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.clients__arrow--next',
            prevEl: '.clients__arrow--prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 6,
            }
        },
        observeParents: true,
        observer: true,
    });
} else {
    $('.clients__items').removeClass('swiper-container');
    $('.clients__items-wrapper').removeClass('swiper-wrapper');
    $('.clients__item').removeClass('swiper-slide swiper-slide-active swiper-slide-next swiper-slide-prev');
}