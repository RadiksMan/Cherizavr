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
function oneHeightItems5block(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight-5'));
}


function squareItems(items){
	var margRight=items.eq(0).css('margin-right');
	items.each(function(){
		var width=$(this).width();

		$(this).height(width);
	});
	items.css('margin-bottom', margRight);
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

function galleryNextPrev(block){
    block.find(".gallery-next").click(function(){
        console.log(block.find('li').length);
        if ((block.find('li').size()-1) == block.find('li.active').index()){
             block.find('li').removeClass("active").eq(0).addClass("active");
        }else{
            block.find('li.active').removeClass("active").next().addClass("active");
        }
    });
    block.find(".gallery-prev").click(function(){
        if (0 ==  block.find('li.active').index()){
            block.find('li').removeClass("active").eq(length-1).addClass("active");
        }else{
            block.find('li.active').removeClass("active").prev().addClass("active");
        }
    });
}
function galleryHod(){
    $(".fancybox-gallery").click(function(){
        var block = $(this).attr('href');
        var index = $(this).parent().index();
        $(block).find("ul li").removeClass("active").eq(index).addClass("active");
    });
}

function sliderInit(){
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






/* DOCUMENT READY  */
$(document).ready(function() {
    sliderInit();
    $(".fancybox").fancybox();
   // oneHeightItems5block();
});

$(window).resize(function() {

    //oneHeightItems5block();
});






