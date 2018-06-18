'use strict';
$(function() { 
	var header = $('[data-slider-slick="slick-header"]');		
	var gallery = $('[data-slider-slick="slick-gallery"]');	
	var catalog = $('[data-slider-slick="slick-catalog"]');	
	var prevArrow = '<button type="button" class="slick-prev  is--horizontal">Назад</button>';
	var nextArrow = '<button type="button" class="slick-next  is--horizontal">Далее</button>';
	
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		//prevArrow: prevArrow,
		//nextArrow: nextArrow,
		fade: true
	});
	gallery.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		//draggable: false,
		//swipe: false,
		variableWidth: true,
		centerMode: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
			{
				breakpoint: 768,
				settings: {	
					arrows: false,				
					variableWidth: false,
					centerMode: false,
				}
			}
		]
	});
	catalog.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		dots: true,
		//infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		//prevArrow: prevArrow,
		//nextArrow: nextArrow,
		//fade: true
	});
	$('.slick-cloned').removeAttr('data-fancybox');
}); 