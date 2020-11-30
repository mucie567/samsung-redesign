function focusOnFnc1(){
    $('.input-wrap.split-3').on('focusin',function(){
        $(this).addClass('focus-on');
    });
    $('.input-wrap.split-3').on('focusout',function(){
        $(this).removeClass('focus-on');
    });
    $('.inp-select select').on('focus',function(){
        $(this).parent().addClass('on');
    });
    $('.inp-select select').on('blur',function(){
        $(this).parent().removeClass('on');
    });
    $('.input-wrap .inp-txt').on('change',function () {
        //console.log($(this)); 
        if ($(this).val()!='') {
            $(this).closest('.input-wrap').addClass('valid')
            if($(this).attr('name') == 'user-email'){
                var v = $(this).val();
                if (v.split('@').length !=2) {
                    $(this).closest('.input-wrap').addClass('error');
                } else {
                    $(this).closest('.input-wrap').removeClass('error');
                }
            }
        }  else {
            $(this).closest('.input-wrap').removeClass('valid')
        }
    })
}

$(function(){
    focusOnFnc1();
});