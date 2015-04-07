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
	$('.seanses-items-wrap').each(function(){
		var item=$(this).find('.seanse-block-wrap');
		oneHeight(item);
	});
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

	if($('.schedule-day').length>0){
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
}

function remover(link, block){
	$(link).click(function(){
		$(this).parents(block).remove();
	});
};

var mas=[
	[55.76, 37.49],
	[55.76, 37.56],
	[55.76, 37.55],
	[55.73, 37.60]
]

function mapInit(){
	ymaps.ready(init);

	var map, placemark;
	var coordX = 55.75, coordY = 37.50;
	var placemarkArray = [];

	function init(){

		map = new ymaps.Map('map',{  //инициализация карты
			center:[coordX, coordY], //определение центра карты *
			zoom:11
		},{
			autoFitToViewport: 'always' //резиновая карта
		});

		for(i=0;i<mas.length;i++){
			placemark = new ymaps.Placemark(mas[i],{},{
				iconLayout: 'default#image', // метка с текстом или без (default#image или default#imageWithContent соответвенно)
				iconImageHref: 'images/map_icon.png', // Путь к картинке иконки
				iconImageSize: [28, 38], // ширина и высота иконки
				iconImageOffset: [0, -30] // отступ иконки от заданого центра метки 
			});
			placemarkArray[i] = placemark; // Сохранение ссылок на метки

			placemark.events.add('mouseenter',function(e){ // Добавляем событые hover метке
				e.get('target').options.set({
					iconImageHref: 'images/map_icon_hover.png'
				});
	        	
	        });

	        placemark.events.add('mouseleave', function(e){ // Добавляем событые unhover метке
	        	e.get('target').options.set({
					iconImageHref: 'images/map_icon.png'
				});
	        });

			map.geoObjects.add(placemark);
		}

	}
}

$(document).ready(function(){

	itemRank();
	oneHeightItems();
	tabsScedule();
	remover('.remove-seanse', '.seanses-item');

	mapInit();

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