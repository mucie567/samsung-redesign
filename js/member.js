function focusOnFnc1(){
    $('.input-wrap.split-3').on('focusin',function(){
        $(this).addClass('focus-on');
    });
    $('.input-wrap.split-3').on('focusout',function(){
        $(this).removeClass('focus-on');
    });
    $('.inp-select select').on('focus',function(){
        $(this).parent().addClass('on');
    })
    $('.inp-select select').on('blur',function(){
        $(this).parent().removeClass('on');
    })
}
$(function(){
    focusOnFnc1();
});