$(function() {

	// Кнопка наверх
	$(".btn-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	//Magnific-popup
	 $(".popup").magnificPopup({type:"image"});


	 //Owl-carouse
	$(".owl-carousel").owlCarousel({
		responsive:{
			0:{
			items:1,
			nav:true,
			navText:"",
			autoHeight: true
		}
		}
	});


});
