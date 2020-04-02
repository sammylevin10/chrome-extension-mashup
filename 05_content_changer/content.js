console.log("Instagram is being used");

window.setInterval(function(){
  replace();
  console.log("replaced");
}, 50);

let headPicture = "https://d1v7jayx2s9clc.cloudfront.net/user/pages/10.bodies-incorporated/head_logo_LG.jpeg";
let offlinePicture = "https://i.kym-cdn.com/photos/images/original/000/877/424/7d0.jpg";

function replace() {
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
    //Changes all images and video thumbnails on Instagram to "offline"
    if (images[i].alt!="Instagram") {
      images[i].currentSrc = offlinePicture;
      images[i].srcset = offlinePicture;
    }
    //Changes all profile photos on Instagram to the Bodies Inc. avatar
    if (images[i].alt.includes("profile")) {
  		images[i].src = headPicture;
      images[i].currentSrc = headPicture;
      images[i].srcset = headPicture;
    }
  }
}
