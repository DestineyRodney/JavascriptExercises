"use strict";

$(document).ready(function(){


$('#invisible-toggle').click(function (e){
    e.preventDefault();
    $('.invisible').toggleClass('invisible-dd');
});

$('dt').click(function (e){
    e.preventDefault();
    console.log("clicked");
    $(this).toggleClass('highlight-dt');
});

$('#last-li').click(function(e){
    e.preventDefault();
    $('ul').each(function(){
        $(this).children().last().addClass('highlight-last');
    })

})

    $('h3').click(function(e){
        console.log('clicked');
        e.preventDefault();
        $('li').css('font-weight', 'bold');
    })

    $('li').click(function(e){
        e.preventDefault();
        $(this).parent().children('li').first().css('color', 'blue');
    })

$('#btn1').click(function(e){
    console.log('clicked');
    e.preventDefault();
    $('#img1').attr("src", "img/8.jpg");
});

    $('#btn-2').click(function(e){
        console.log('clicked');
        e.preventDefault();
        $('#img2').attr("src", "img/7.jpg");
    });

    $('#btn-3').click(function(e){
        console.log('clicked');

        e.preventDefault();
        $('#img3').attr("src", "img/Vocaroo%20QR%20Code%201h5UuqpfNIiD.png")
    })




});