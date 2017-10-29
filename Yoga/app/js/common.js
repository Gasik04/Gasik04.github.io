$(function() {


	$("header .header_slider .header_form .selectlist").selectize();



		 //Owl-carouse
	$(".owl-carousel").owlCarousel({
		loop:true,
		responsive:{
			0:{
			items:1,
			nav:true,
			navText:"",
			autoHeight: false
		}
		}
	});




});