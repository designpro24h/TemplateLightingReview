// require jQuery JavaScript Library v2.1.0

(function($) {

/* ============================================================
 * Execute JavaScript when the DOM is fully loaded.
 * ============================================================ */
$(document).on('ready', function() {

$('#slides').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				centerMode: true,
				variableWidth: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				centerMode: true,
				variableWidth: true,
				dots: true
			}
		}
	]
});

});//End -> ready method

/* ------------------------------------------------------------
   (Execute JavaScript when the Window Object is fully loaded.)
 * ------------------------------------------------------------ */
$(window).on('load', function() {
	
});//End



})(jQuery);
