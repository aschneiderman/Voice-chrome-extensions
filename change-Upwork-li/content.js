//
// Based on extension tutorials & code by Daniel Shiffman
// http://shiffman.net/a2z

// This is the content script for the extension

// Make sure that the extension is installed
console.log("Change-Upwork-li extension is running!");

// Content scripts can manipulate the DOM
// Here I'm changing the background for all the List items
var elts = document.getElementsByTagName('li');
for (var i = 0; i < elts.length; i++) {
  // elts[i].style['background-color'] = 'purple';
  elts[i].style.backgroundColor = 'purple';
  elts[i].style.color = 'white';
}

console.log(`Total number of List items I made purple: ${elts.length}`);