import 'owl.carousel';
import * as $ from 'jquery';
// Default theme

// Default theme
import '@splidejs/splide/css';


// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';


// or only core styles
import '@splidejs/splide/css/core';

import Splide from '@splidejs/splide';

// or other themes


// or only core styles
import '@splidejs/splide/css/core';



import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);



if($(".slider_splides").length) {
	new Splide(".slider_splides", {
		pagination: false,
		type:"fade"
	}).mount();
}
if($(".blog_section .splide").length) {
	new Splide(".blog_section .splide", {
		autoWidth: true,
		gap:"39px",
		pagination:false,
		type:"loop",

	}).mount();
}

// if($(".tour_content .splide").length) {
// 	new Splide(".tour_content .splide", {
// 		pagination: false,
// 		type:"fade"
// 	}).mount();
// }


// $(".stars .star").hover(function(){
// 	$(this).find("path").css({
// 		fill:"red"
// 	})
// })

$(".planning_model").click(function(){

	$(".modal_container").css({
		'display':"flex"
	})
})

$(".modal_close").click(function(){
	$(".modal_container").css({
		'display':"none"
	})
})