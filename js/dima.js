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

function scrollpaneInit(){
	$('.scroll-pane').each(function(){
		if($(this).is('.schedule-wrap')){
			$(this).jScrollPane({
				autoReinitialise:true,
				mouseWheelSpeed:50,
				dupingTop:true,
				horizontalDragMaxWidth:50
			});
		}
		else{
			$(this).jScrollPane({
				autoReinitialise:true,
				mouseWheelSpeed:50
			});
		}
	});
}

function tabsScedule(){

	var spanWidth=$('.schedule-day.active .day-mount-text').width();
	var spanLeft=$('.schedule-day.active .day-mount-text').position().left;
	$('.week-pointer').css({'width':spanWidth+'px','left':spanLeft+'px'});

	$('.schedule-day').click(function(){
		var index=$(this).index();
		$('.schedule-day').removeClass('active');
		$(this).addClass('active');
		$('.schedule-item').removeClass('active');
		$('.schedule-item').eq(index).addClass('active');
		var spanWidth=$(this).find('.day-mount-text').width();
		var spanLeft=$(this).find('.day-mount-text').position().left;
		$('.week-pointer').css({'width':spanWidth+'px','left':spanLeft+'px'});
	});

	$('.schedule-day').hover(
		function(){
			spanWidth=$(this).find('.day-mount-text').width();
			spanLeft=$(this).find('.day-mount-text').position().left;
			$('.week-pointer').css({'width':spanWidth+'px','left':spanLeft+'px'});
		},
		function(){
			spanWidth=$('.schedule-day.active .day-mount-text').width();
			spanLeft=$('.schedule-day.active .day-mount-text').position().left;
			$('.week-pointer').css({'width':spanWidth+'px','left':spanLeft+'px'});
		}
	);


}

$(document).ready(function(){

	itemRank();
	oneHeightItems();
	tabsScedule();

});

$(window).resize(function(){

	oneHeightItems();
	$('.footer_placeholder').height($('.footer').outerHeight());

});

$(window).load(function(){

	oneHeightItems();

	$('.footer_placeholder').height($('.footer').outerHeight());

	scrollpaneInit();
	
});