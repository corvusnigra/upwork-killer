(function ($) {


	function stickyFooter() {
		if ($(document).height() <= $(window).height()){
			$(".footer").addClass("navbar-fixed-bottom");
		} else {
			$(".footer").removeClass("navbar-fixed-bottom");
		}

	};

	function selectFilter() {
		var select = $("#select111,#select112,#select120");
		if(select.length){
			$("#select111,#select112,#select120").select2({
				tags: true,
				placeholder: "Начните вводить"
			});
		}
		
	};


	function newsCarousel () {
  	var newsCarousel = $('.news-carousel');
  	if (newsCarousel.length) {
  		newsCarousel.owlCarousel({
  			items:2,
  			loop:true,
  			nav:true,
  			dots: true,
  			navText: [
  			'<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>',
  			'<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'
  			]
  		
  		});
  	}
  }




  
  // doc ready
  $(document).on('ready', function () {
     stickyFooter();
     newsCarousel();
     
  });
	// window load
	$(window).on('load', function () {
		stickyFooter();
		selectFilter();
		newsCarousel();

	});



})(jQuery);