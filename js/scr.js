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
            console.log('123');
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.quest-item'));


}





$(document).ready(function(){

    rectangleItems($(".quest-item-img a"));
    itemRank();
    oneHeightItems();



});

$(window).resize(function(){

    rectangleItems($(".quest-item-img a"));
    oneHeightItems();


});

$(window).load(function(){

    rectangleItems($(".quest-item-img a"));


});