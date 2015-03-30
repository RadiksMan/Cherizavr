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

$(document).ready(function(){

	itemRank();
	oneHeightItems();

});

$(document).resize(function(){

	oneHeightItems();

});

$(window).load(function(){

	oneHeightItems();
	
});