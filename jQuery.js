"use strict";

$(document).ready(function(){
    alert("Ready");
}); // alerts page is loaded

var myName = $('#name').html(); // html() method to get the contents of the HTML element as a string and then assigned that string to the variable myName
console.log(myName);

$('#mood').click(function(e){
    var myMood = $('#mood').html();
    alert(myMood);
})
function myArray (){
    let arr1 = [1,2,3,4,5];
    arr1.forEach(function (arr) {
        console.log(arr + 1);

    })
    let decremented = arr1.map(function (n){
        return --n;
    });
    console.log(decremented);
}

myArray();

// Selectors : ID Selector ('#id) Class Selector ('.Class') Element Selector ('element') Multiple Selectors (slector1[, selector 2[, selector 3]]) All selector *

//$('selector') or jQuery('selector')

// selector return jQuery object - object that represents zero or more HTML elements with all of the methods of jQuery attached to it

//jQuery Methods
// .html : returns the HTML contents of selected element or first element in a collection
// .css : allows us to change CSS properties

$('#name').css('background-color', 'blue');
let myNewName = $('#name').html();
console.log(myNewName);

$('*').css('font-size', '60px');

/*EVENTS
.click() — Bind an event handler to the "click" JavaScript event or trigger that event on an element.
.dblclick() — Bind an event handler to the "dblclick" JavaScript event or trigger that event on an element.
.hover() — Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.


EVENT HANDLER
:an event listener, or event handler function is a callback function that is called when an event happens
:the handler function is passed the event object when it is called
:the event object contains details about the event that occurred, as well as methods for modifying the event, for example, preventDefault
:the event object can be omitted from the function definition if it is not used
:we can attach an anonymous function or a named function as a callback function
:any anonymous function can be refactored to be a named function

 */

// let name = document.getElementById('name');
// name.addEventListener('click', function(e){
//     e.preventDefault();
//     alert('My element was clicked');
//
//
// })

function eventHandler (e){
    alert("My name has been clicked");
}
let name = document.getElementById('name');

name.addEventListener('click', eventHandler);

$('#codeup').dblclick(function(e) {
    alert('h1 with the id of "codeup" was double clicked!');
});

$('h1').dblclick(function(e){
    alert('dbl click')
})

// $('#codeup').hover(
//     function() {
//         $(this).css('background-color', '#FF0');
//     },
//     function() {
//         $(this).css('background-color', '#FFF');
//     }
// );

/*Attribute Methods
.html() — Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
.css() — Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.
.addClass() — Adds the specified class(es) to each of the set of matched elements.
.removeClass() — Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
.toggleClass() — Add or remove one or more classes from each element in the set of matched elements, depending on either the class’ presence or the value of the switch argument.*/

// If we had multiple h1 elements on the page, and we only wanted to alert the contents of the one that was clicked, we could use $(this):


// $('#codeup').click(function() {
//     var h1Contents = $(this).html();
//     alert(h1Contents);
// });

//refactor w updated Html
$('#codeup').click(function (){
    alert($(this).html('New Code'));
});