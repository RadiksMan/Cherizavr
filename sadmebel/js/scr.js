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
    var h = $(window).height();
    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $(".first-izd").offset().top+300) {
            $(".first-izd .slider-main-wrap").css({visibility:"visible"});
            $(".first-izd .slider-main-wrap").each(function(){
                $(this).addClass('animated bounceInRight');
             })
        }
        if ( ($(this).scrollTop()+h) >= $(".second-izd").offset().top+300) {
             $(".second-izd .slider-main-wrap").css({visibility:"visible"});
             $(".second-izd .slider-main-wrap").each(function(){
                $(this).addClass('animated bounceInLeft');
             })
        }
        if ( ($(this).scrollTop()+h) >= $(".third-izd").offset().top+300) {
             $(".third-izd .slider-main-wrap").css({visibility:"visible"});
             $(".third-izd .slider-main-wrap").each(function(){
                $(this).addClass('animated bounceInUp');
             })
        }
        if ( ($(this).scrollTop()+h) >= $(".our-clients h5").offset().top+300) {
             $(".our-clients .slider-main-wrap").css({visibility:"visible"});
             $(".our-clients .slider-main-wrap").each(function(){
                $(this).addClass('animated fadeInUp');
             })
        }
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
function inputNums(){
    $(".input-number").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) ||
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
};

function validForm(){
    $('form').each(function(){
        $(this).submit(function(){
            var point=1;
            $(this).find('.form-field').each(function(){
                var value=$(this).val();
                if(value==''){
                    point=0;
                    $(this).addClass('error');
                }
                else{
                    $(this).removeClass('error');
                }
            });
            if(point==0){
                return false;
            }
        });
    });
};

/* DOCUMENT READY  */
$(document).ready(function() {
    sliderInit();
    $(".fancybox").fancybox();
    AnimatedMainPage();

    inputNums();
    validForm();

});

$(window).resize(function() {

});






