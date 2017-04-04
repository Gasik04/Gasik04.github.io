$(function() {

	//$(".search-form").click(function(){
	//	$(this).toggleClass("reset-form")
	//});



	$('.registration > li > a').click(function(){
		var $this = $(this),
		$pop = $this.next('.popup-form'),
		$close = $pop.children('.close');

		$this.parent().siblings().children('.popup-form').hide()
		$pop.show();
		$close.click(function(){
			$pop.hide();
		});
		return false;
	});



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
