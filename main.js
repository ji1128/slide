$(document).ready(function () {
    //slide : fade In/out

    // $('#slide ul li').hide();
    // $('#slide ul li:first').fadeIn();

    // let img = 2;
    // let num = 0;
    // setInterval(function () {
    //     num = (num === img) ? 0 : num += 1;
    //     //-----------? 참일 때 값 : 거짓일 때

    //     $('#slide ul li').eq(num - 1).fadeOut();
    //     $('#slide ul li').eq(num).fadeIn();
    // }, 3000);


    //slide 오-> 왼
    let img = $('#slide ul li:first').clone();
    img.appendTo($('#slide ul'));

    let num = 1;

    setInterval(function () {
        if (num > 3) {
            $('#slide ul').css('margin-left', 0);
            num = 1;
        }

        $('#slide ul').animate({
            marginLeft: '-=1200'
        }, 600);
        num++;

    }, 3000);

})