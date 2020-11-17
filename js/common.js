// 슬라이드 다운



function gnbFnc(element) {
    var menu1 = element.find('>li>a');
    var subMenu1 = element.find('ul');
    var headerWrap = element.closest('header');
    var headerBg = $('<div class="header-bg"></div>').css({
        'position':'absolute',
        'left':'0',
        'top':'107px',
        'height':'310px',
        'display':'none',
        'width':'100%',
        'background-color':'#fff',
        'box-shadow':'0 5px 5px rgba(0,0,0,0.1)'
    });
    headerWrap.append(headerBg);
    var oldMenu = null;
    menu1.on('mouseover',function() {
        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
       $(this).addClass('on'); 
       subMenu1.stop(true).slideDown(500);
       headerBg.stop(true).slideDown(500);
       oldMenu=$(this);
    });
    element.on('mouseleave',function() {
        subMenu1.stop(true).slideUp(100);
        headerBg.stop(true).slideUp(100);

        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
    })
}
$(function () { 
    gnbFnc($('#gnb'));
    $('.main-row-slide-1').slick({
        'autoplay' :true,
        'dots':true
    });
});
