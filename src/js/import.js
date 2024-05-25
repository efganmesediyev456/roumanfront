import * as $ from 'jquery';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import 'owl.carousel';
import 'inputmask/dist/inputmask.js';
import 'inputmask/dist/jquery.inputmask.min';
import 'inputmask/dist/bindings/inputmask.binding';

import './carousels';
import './app';
import './sharer';
import './chart';
import './player';
import simpleParallax from 'simple-parallax-js';


//STYLES
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import "@fancyapps/ui/dist/fancybox.css";



import 'animate.css';
import '../style/to-export.scss';
import window from 'inputmask/lib/global/window';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:true,
    focusOnSelect: true
});

$('.tour_slider_right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.tour_carousel .buttons .right'),
    prevArrow: $('.tour_carousel .buttons .left')
});
$('.you_may_like_this .sliders').slick({
    dots: false,
    arrows:false,
    slidesToShow: 6,

    focusOnSelect: true,
    infinite: true,

});