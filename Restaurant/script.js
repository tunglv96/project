﻿ $(function(){
 	khoimonan = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});

	khoimonan.imagesLoaded().progress( function() {
	  khoimonan.isotope('layout');
	});

	$('.tieudect a').click(function() {
		dulieu = $(this).data('monan'); 
		khoimonan.isotope({ filter:  dulieu })
		 return false ; 
	});
	 
	 new WOW().init();
})  
 