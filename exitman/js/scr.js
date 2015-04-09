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

function oneHeightItemsTwo(){

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
    if($(window).width()>=768){
    $('.thegame .img-slider ul').height($('.container-big-img>.container').height());
    }else{
        $('.thegame .img-slider ul').removeAttr('style');
    }
}

function theGameslide(){
    $('.img-slider-minidots li').click(function(){
        $('.img-slider-minidots li').removeClass('active');
        $('.thegame .img-slider li').removeClass('active');

        var equ = $(this).index();
        $('.img-slider-minidots li').eq(equ).addClass('active');
        $('.thegame .img-slider li').eq(equ).addClass('active');
        //theGameHeight();
    });
}

/**/

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

    rectangleItems($(".quest-item-img a"));
    itemRank();
    oneHeightItemsTwo();
    resWrapHeight();
    submitChekPass();
    theGameHeight();
    theGameslide()
    itemRank();
    oneHeightItems();
    tabsScedule();
    remover('.remove-seanse', '.seanses-item');
    mapInit();

});

$(window).resize(function(){

    rectangleItems($(".quest-item-img a"));
    oneHeightItemsTwo();
    resWrapHeight();
    theGameHeight();
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());

});

$(window).load(function(){

    rectangleItems($(".quest-item-img a"));
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());
    scrollpaneInit();

});