/*Podderzhka Placeholderov v starih brouzerah*/
$(function(){
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}

});

function rectangleItems(items){
    if ($(window).width() <= 767){
        items.each(function(){
            var height=$(this).height();
            $(this).width(height*1.625);
        });
    }
}
function itemRank(){
    $('.quest-kachka').each(function(){
        var rank=$(this).data('rank')*20;
        $(this).find('.quest-compexity').css({'width':rank+'%'});
    });
};


function oneHeightItems(){

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

    oneHeight($('.quest-item'));


}

function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each( function(){
    currentHeight = $(this).height();
    if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
        }
    });
    columns.height(tallestcolumn);
}

function resWrapHeight(){
    if($(window).width()>=768){
        setEqualHeight($('.res-wrap'));
    }else{
        $('.res-wrap').removeAttr('style');
    }
}

function submitChekPass(){
    $('.personal-cabinet-redaction form').submit(function(){
        var pass1 = $(".pass-1").val();
        var pass2 = $(".pass-2").val();
        if(pass1==pass2 || pass1==""){
            $(".pass-1,.pass-2").addClass('error');
            return false;
        }
    })
}

function theGameHeight(){
    $('.thegame .img-slider ul').height($('.container-big-img>.container').height());
}

function theGameslide(){
    $('.img-slider-minidots li').click(function(){
        $('.img-slider-minidots li').removeClass('active');
        $('.thegame .img-slider li').removeClass('active');

        var equ = $(this).index();
        $(this).eq(equ).addClass('active');
        $('.thegame .img-slider li').eq(equ).addClass('active');
        //theGameHeight();
    });
}



$(document).ready(function(){

    rectangleItems($(".quest-item-img a"));
    itemRank();
    oneHeightItems();

    resWrapHeight();

    submitChekPass();

    theGameHeight();

    theGameslide()

});

$(window).resize(function(){

    rectangleItems($(".quest-item-img a"));
    oneHeightItems();

    resWrapHeight();
    theGameHeight();

});

$(window).load(function(){

    rectangleItems($(".quest-item-img a"));


});