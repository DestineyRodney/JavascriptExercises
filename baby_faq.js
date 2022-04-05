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

});