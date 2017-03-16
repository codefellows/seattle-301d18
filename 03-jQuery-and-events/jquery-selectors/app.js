//*****basic selectors*****//

//element
$('li')  //returns an array of all matching elements

//class
$('.form-element')

//id
$('#beautiful-list')

//parent descendent
$('#list-container li')  //returns all <li>s anywhere inside the #list-container element

// parent > child
$('#list-container > p')  //returns any <p> that is a DIRECT child of #list-container

//attribute
$('input[name="textbox"]')
$('li[data-category="list-item"]')

//another way to do the previous selection
var category = 'list-item';
$('li[data-category="' + category + '"]')

//get text of the matched element(s)
$('h1').text()

//set text of the matched element(s)
$('h1').text('this is some new text')

//get the data-category attribute of an li
$('li').data('category')

//set the data-category attribute of an li
$('li').data('category', 'new-value')

//make a new <li> and append it to the <ul>
var $newLi = $('.li-template').clone();
$newLi.text('this is different text');
$('ul').append($newLi)

//remove an element from the DOM
$('button').remove()

//run a command as soon as the DOM loads
$(document).ready(function() {
  alert('the DOM is ready now!');
})
