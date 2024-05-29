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


import {gsap, ScrollTrigger, Draggable, MotionPathPlugin} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


if ($(".slider_splides").length) {
	new Splide(".slider_splides", {
		type: 'fade',
		rewind: true,
		autoplay: true,
		interval: 3000,
		perPage: 1,
		gap: 0,
		pagination: false,
		loop: true,
		speed: 1500,
		pauseOnHover: false,

	}).mount();
}
if ($(".blog_section .splide").length) {
	new Splide(".blog_section .splide", {
		autoWidth: true,
		gap: "39px",
		pagination: false,
		type: "loop",

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

$(".planning_model").click(function () {

	$(".modal_container").css({
		'display': "flex"
	})
})

$(".modal_close").click(function () {
	$(".modal_container").css({
		'display': "none"
	})
})


$(".plus").click(function () {
	var value = $(this).parent().find("input").val();
	value = parseInt(value) + 1;
	$(this).parent().find("input").val(value)
})

$(".minus").click(function () {
	var value = $(this).parent().find("input").val();
	value = parseInt(value) - 1;
	if (value < 1) {
		value = 1;
	}
	$(this).parent().find("input").val(value)
})

$(".star").hover(function(){
	var index=$(this).index();
	$(".star").each(function(item){
		var number=$(this).index();
		if(number<=index){
			$(this).html('<i   style="font-size:29px;color: rgb(255, 193, 71);" class=" fas fa-star"></i>')
		}else{
			$(this).html('<svg width="31.000000" height="29.000000" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
				'                  <desc>\n' +
				'                  Created with Pixso.\n' +
				'                  </desc>\n' +
				'                  <defs/>\n' +
				'                  <path id="Vector" d="M15.51 24.09L23.27 28.77C24.02 29.23 24.96 28.55 24.76 27.69L22.7 18.87C22.61 18.5 22.74 18.13 23.02 17.88L29.87 11.95C30.54 11.37 30.18 10.27 29.3 10.19L20.28 9.43C19.91 9.4 19.59 9.16 19.44 8.82L15.92 0.5C15.57 -0.31 14.42 -0.31 14.07 0.5L10.55 8.82C10.4 9.16 10.08 9.4 9.71 9.43L0.69 10.19C-0.19 10.27 -0.55 11.37 0.12 11.95L6.97 17.88C7.25 18.13 7.38 18.5 7.29 18.87L5.23 27.69C5.03 28.55 5.97 29.23 6.72 28.77L14.48 24.09C14.8 23.9 15.19 23.9 15.51 24.09ZM21.73 19.09L23.78 27.91L16.03 23.23Q15.51 22.92 15 22.92Q14.48 22.92 13.96 23.23L6.21 27.91L8.27 19.09Q8.4 18.51 8.24 18.01Q8.08 17.52 7.63 17.13L0.77 11.19L9.8 10.43Q10.4 10.37 10.81 10.07Q11.23 9.77 11.47 9.21L15 0.89L18.52 9.21Q18.76 9.77 19.18 10.07Q19.59 10.37 20.19 10.43L29.22 11.19L22.36 17.13Q21.91 17.52 21.75 18.01Q21.59 18.51 21.73 19.09Z" fill="#FFC147" fill-opacity="1.000000" fill-rule="evenodd"/>\n' +
				'                  </svg>')

		}
	})
})




if($(".you_may_like_this .splide").length){
    var splide=new Splide(".you_may_like_this .splide",{
        autoWidth:true,
        pagination:false,
        gap:32,
        arrows:false,
    }).mount()
    $(".you_may_like_this .buttons .left").click(function(){
        splide.go("<")
    })
    $(".you_may_like_this .buttons .right").click(function(){
        splide.go(">")
    })
}