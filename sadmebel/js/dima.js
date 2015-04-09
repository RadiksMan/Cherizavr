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

$(document).ready(function(){

    inputNums();
    validForm();
});