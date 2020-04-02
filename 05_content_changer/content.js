// "use strict";
//
// var url = "images/rainbow.png";

// function replace() {
// 	var images = document.getElementsByTagName("img");
// 	for (var i = 0; i < images.length; i++) {
// 		images[i].src = url;
// 	}
// }
//
// chrome.storage.sync.get({
// 	enabled: false,
// 	url: ""
// }, function(items) {
// 	if (items.enabled) {
// 		url = items.url;
// 		var css = document.createElement("style");
// 		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
// 		document.body.appendChild(css);
// 		window.setInterval(replace, 3000);
// 		replace();
// 	}
// });

// A2Z F17
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F17

// This is the content script for the extension

// It only runs on github.com as indicated in manifest.json
// "content_scripts": [
//   {
//     "matches": [
//       "http://github.com/*",
//       "https://github.com/*"
//     ],
//     "js": ["content.js"]
//   }
// ],


// Look for all elements that are an "avatar" or "gravatar"
// var avatars = document.getElementsByClassName('avatar');
// var gravatars = document.getElementsByClassName('gravatar');
//
// // Call swapImg() for all of these DOM elements
// for (var i = 0; i < avatars.length; i++) {
//   swapImg(avatars[i]);
// }
//
// for (var j = 0; j < gravatars.length; j++) {
//   swapImg(gravatars[j]);
// }

var newimg = chrome.extension.getURL("https://d1v7jayx2s9clc.cloudfront.net/user/pages/10.bodies-incorporated/head_logo_LG.jpeg");

console.log("Here we go");

window.setInterval(function(){
  replace();
  console.log("replaced");
}, 50);

let myUrl = "https://d1v7jayx2s9clc.cloudfront.net/user/pages/10.bodies-incorporated/head_logo_LG.jpeg";
let myOtherUrl = "https://i.kym-cdn.com/photos/images/original/000/877/424/7d0.jpg";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
    if (images[i].alt!="Instagram") {
  		images[i].src = myUrl;
      let currentSource = images[i].currentSrc;
      currentSource = myUrl;
      images[i].currentSrc = myOtherUrl;
      images[i].srcset = myOtherUrl;
      console.log(i);
    }
    var str = images[i].alt;
    var n = str.includes("profile picture");

    if (n) {
  		images[i].src = myUrl;
      let currentSource = images[i].currentSrc;
      currentSource = myUrl;
      images[i].currentSrc = myUrl;
      images[i].srcset = myUrl;
      console.log(i);
    }
	}
}

// chrome.storage.sync.get({
// 	enabled: false,
// 	url: ""
// }, function(items) {
// 	if (items.enabled) {
// 		url = items.url;
// 		var css = document.createElement("style");
// 		css.innerHTML = "img { content: url(\"" + url + "\") !important; }";
// 		document.body.appendChild(css);
// 		window.setInterval(replace, 3000);
// 		replace();
// 	}
// });



// for(var i = 0; i < ilist.length; i++) {
//   ilist[i].src = newimg;
//   console.log(i);
// }

// Change the image to a file that is part of this extension
// The file must be made available in manifest.json
//   "web_accessible_resources": [
//      "images/rainbow.png"
// ]
// function swapImg(img) {
//   var newimg = chrome.extension.getURL("images/rainbow.png");
//   img.src = newimg;
// }
//
// // Look for a "repository" description
// var descriptions = document.getElementsByClassName('repository-description');
//
// // This is just a silly algorithm that reverses the text
// for (var k = 0; k < descriptions.length; k++) {
//   // Look at the text
//   var txt = descriptions[k].innerHTML;
//   // Split it up
//   var words = txt.split(/\s+/);
//   // Reverse the array
//   words = words.reverse();
//   // Join it back together
//   txt = words.join(' ');
//   // Set the new text and change the background-color
//   descriptions[k].innerHTML = txt;
//   descriptions[k].style['background-color'] = '#F0C';
// }
