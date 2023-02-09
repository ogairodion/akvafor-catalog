import $ from "jquery"
import {Swiper, EffectFade, Autoplay} from "swiper"

Swiper.use([EffectFade, Autoplay]);

let windowHeight = $(window).height();

const mainSlider = new Swiper('.main-top__slider', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    allowTouchMove: false,
});

$(window).on('load', function() {
    setTimeout(showEffect($('.main-top__wrapper'), '.effect', 'effect--left'), 600);
    setTimeout(showEffect($('.main-top__wrapper'), '.effect', 'effect--right-up'), 600);
    setTimeout(showEffect($('.main-top__wrapper'), '.parallax__item', 'effect--show'), 600);
});

$(window).on("scroll", function() {
    $(".effect").each(function() {    
        if ($(window).scrollTop() >= $(this).offset().top - windowHeight) {
            $(this).removeClass('effect--left effect--right effect--show effect--flip');
        }
    });
});

function showEffect(element, className, removedClass) {
    $(className , element).removeClass(removedClass);
}