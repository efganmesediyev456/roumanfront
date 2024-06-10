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
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows:true,
    focusOnSelect: true
});


$(".slider-for .slick-prev").html('<svg width="17.114258" height="7.066528" viewBox="0 0 17.1143 7.06653" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
    '\t<desc>\n' +
    '\t\t\tCreated with Pixso.\n' +
    '\t</desc>\n' +
    '\t<defs/>\n' +
    '\t<path id="Vector" d="M16.61 3.53L0.5 3.53" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>\n' +
    '\t<path id="Vector" d="M3.8 0.5L0.5 3.53L3.8 6.56" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>\n' +
    '</svg>\n');

$(".slider-for .slick-next").html('<svg width="17.349609" height="7.066528" viewBox="0 0 17.3496 7.06653" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
    '\t<desc>\n' +
    '\t\t\tCreated with Pixso.\n' +
    '\t</desc>\n' +
    '\t<defs/>\n' +
    '\t<path id="Vector" d="M0.5 3.53L16.84 3.53" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>\n' +
    '\t<path id="Vector" d="M13.54 0.5L16.84 3.53L13.54 6.56" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>\n' +
    '</svg>\n');

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