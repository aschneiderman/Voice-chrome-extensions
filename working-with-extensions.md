## Installing an Extension

Here's what you need to do to install a Google Chrome extension that you are working on:

- Go to [chrome://extensions/](chrome://extensions/)
- Turn on Developer Mode
  
For each extension you want to Develop: 
- Click __Load unpacked__, then the folder containing the extension
- When you make a change to the extension, go back to the extensions page and click the little reload button on that extension 


## Manifest.json

This is how you tell Google Chrome all the pieces needed for the extension.

A couple of key things:
- Use the new version of the Manifest, v3
  - NOTE: as of right now (mid 2021), most of the examples you will find online are v2 and will need to be converted 

## Content Scripts

There are two types of scripts: background scripts and content scripts. 
- If you want to tweak a page, odds are you are going to use a content script
- You can either tell Google Chrome a specific content script you want it to use("statically declared"), or you can do it dynamically ("programmatically injected"); Odds areYou will use a statically declared script.

### Content Script: what to put in Manifest.json

To create a Content Script, is an example of what you put in the manifest:
```
 "content_scripts": [
   {
     "matches": ["http://*.nytimes.com/*"],
     "css": ["myStyles.css"],
     "js": ["contentScript.js"]
   }
 ],
```

- "matches": a pattern for the pages that the content script should run on
- "css", "js": the CSS and JavaScript files that should be added to ("injected" into) a matching page; You don't have to have both

### Content Script: what to put in the content script

Almost anything you can Use JavaScript to manipulate a page, youu can put into a content script. For example, this script will change the background color of every paragraph to purple and the foreground color to white:

```
var paragraph = document.getElementsByTagName('p');
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.backgroundColor = 'purple';
  paragraph[i].style.color = 'white';
}
```






## Documentation
Google's main documentation:
- [Developer Guide](https://developer.chrome.com/docs/extensions/mv3/devguide/)
- [Overrview](https://developer.chrome.com/docs/extensions/mv3/overview/)

