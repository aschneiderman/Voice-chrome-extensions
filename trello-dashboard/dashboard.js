//
// Based on extension tutorials & code by Daniel Shiffman
// http://shiffman.net/a2z

// This is the content script for the extension

// Make sure that the extension is installed
console.log("Chrome extension is running!");

// Content scripts can manipulate the DOM
// Here I'm changing the background for all the paragraphs
var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
  // elts[i].style['background-color'] = 'purple';
  elts[i].style.backgroundColor = 'purple';
  elts[i].style.color = 'white';
}

console.log(`Total number of paragraphs I made purple: ${elts.length}`);

// createEvent

// div element with role="button".
// div element has onclick event to handle mouse clicks

// Here's what we're going to work with:
// <a role="button"><li class="_17Tk1sJgzO0FYP"><div class="_17h0Z1BErjcV5x"><span class="_1MfE1hXf6pHAzw">Sort ascending</span></div></li></a>

// $("<p>").text("jQuery v" + $.fn.jquery).appendTo(document.body);

// // Hook up a handler *not* using jQuery, in both the DOM0 and DOM2 ways
// div = document.getElementById("theDiv");
// div.onclick = dom0Handler;
// if (div.addEventListener) {
//   div.addEventListener('click', dom2Handler, false);
// } else if (div.attachEvent) {
//   div.attachEvent('onclick', dom2Handler);
// }

// // Hook up a handler using jQuery
// $("#theDiv").click(jqueryHandler);

// // Trigger the click when our button is clicked
// $("#theButton").click(function() {
//   display("Triggering <code>click</code>:");
//   $("#theDiv").click();
// });

// function dom0Handler() {
//   display("DOM0 handler triggered");
// }
