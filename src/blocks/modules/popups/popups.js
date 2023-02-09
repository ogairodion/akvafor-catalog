import $ from "jquery"
import {Swiper, Navigation, Pagination} from "swiper"

Swiper.use([Navigation, Pagination]);

let windowWidth = $(window).width();

let popupSlider = new Swiper('.popup__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
        nextEl: '.popup__slider-arrow--next',
        prevEl: '.popup__slider-arrow--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    observeParents: true,
    observer: true,
    breakpoints: {
        767: {
            spaceBetween: 40,
            autoHeight: false,
        }
    }
});

$('[data-fancybox]').fancybox({
	afterShow : function() {
        $("body,html").css("overflow", "hidden");
	},
    afterClose: function() {
        $("body,html").css("overflow", "visible");
    }
});

$('.slide-id').on('click', function() {
    let id = $(this).attr('data-id') - 1;

    popupSlider.slideTo(id);
});


function titleToTop() {
    $('.popup__slide').each(function() {
        if ($(window).width() <= 767) {
            $('.popup__slide-title', this).appendTo($('.popup__slide-top', this));
        } else {
            $('.popup__slide-title', this).prependTo($('.popup__slide-info', this));
        }
        
    });
}

titleToTop();