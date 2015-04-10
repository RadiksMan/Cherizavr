var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}
function AnimatedMainPage(){

    //$("#ex1 .post").addClass('animated zoomIn');

    var h = $(window).height();
    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $(".first-izd").offset().top) {
            $(".first-izd .slider-main-wrap").css({visibility:"visible"});
            $(".first-izd .slider-main-wrap").eq(0).addClass('animated bounceInRight');
            $(".first-izd .slider-main-wrap").eq(1).addClass('animated bounceInRight');
            $(".first-izd .slider-main-wrap").eq(2).addClass('animated bounceInRight');
        }
        if ( ($(this).scrollTop()+h) >= $(".second-izd").offset().top) {
             $(".second-izd .slider-main-wrap").css({visibility:"visible"});
             $(".second-izd .slider-main-wrap").eq(0).addClass('animated bounceInLeft');
             $(".second-izd .slider-main-wrap").eq(1).addClass('animated bounceInLeft');
             $(".second-izd .slider-main-wrap").eq(2).addClass('animated bounceInLeft');
        }
        if ( ($(this).scrollTop()+h) >= $(".third-izd").offset().top) {
             $(".third-izd .slider-main-wrap").css({visibility:"visible"});
             $(".third-izd .slider-main-wrap").eq(0).addClass('animated bounceInUp');
             $(".third-izd .slider-main-wrap").eq(1).addClass('animated bounceInUp');
             $(".third-izd .slider-main-wrap").eq(2).addClass('animated bounceInUp');
             $(".third-izd .slider-main-wrap").eq(3).addClass('animated bounceInUp');
             $(".third-izd .slider-main-wrap").eq(4).addClass('animated bounceInUp');
             $(".third-izd .slider-main-wrap").eq(5).addClass('animated bounceInUp');
        }

        // if ( $(this).scrollTop() == 0 ) {
        //     $("#ex2 .post, #ex3 .post, #ex4 .post").each(function(){
        //         if ( $(this).hasClass('last') ) {
        //             $(this).removeClass().addClass('post last');
        //         } else {
        //             $(this).removeClass().addClass('post');
        //         }
        //         $(this).css({visibility:"hidden"});
        //     });
        // }
});













}

function fancyInit(){
	$('.fancybox-gallery').fancybox({
		padding:0,
		fitToView:false,
		autoSize:true,
		tpl:{
			wrap     : '<div class="fancybox-wrap galllery-popup" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
		}
	});
};


function galleryHod(){
    $(".fancybox-gallery").click(function(){
        var block = $(this).attr('href');
        var index = $(this).parent().index();
        $(block).find("ul li").removeClass("active").eq(index).addClass("active");
    });
}

function sliderInit(){
    if($('.slider-img').length>0){
        $('.slider-img').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>',
            centerPadding: '0px',
            respondTo:'window',
            slidesToScroll: 2,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
            ]
        });
    }

}






/* DOCUMENT READY  */
$(document).ready(function() {
    sliderInit();
    $(".fancybox").fancybox();

    AnimatedMainPage();

});

$(window).resize(function() {

});






