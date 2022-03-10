// This is the content script for the extension


// Content scripts can manipulate the DOM
// Here I'm changing the background for all the paragraphs
var elts = document.getElementsByTagName('p');
for (var i = 0; i < elts.length; i++) {
  elts[i].style.backgroundColor = 'red';
  elts[i].style.color = 'white';
}

console.log(`Total number of paragraphs I made purple: ${elts.length}`);



document.querySelector('[tabindex="-1"]').removeAttribute('tabindex');