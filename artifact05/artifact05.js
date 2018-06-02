var myImages =
    ["http://1.bp.blogspot.com/_N4EN978F95o/S2duh-1ojfI/AAAAAAAAB2M/dqj6cBAjrUE/s1600/pink+oreo.jpg",
     "https://static.tumblr.com/d1e536c928ab44c3808263be5b12b8b3/wha8rty/5BMotackr/tumblr_static_tumblr_static__640.jpg",
     "https://i.pinimg.com/originals/2f/df/2e/2fdf2ef3387e60a1b061cfcdc05f63f9.jpg",
     "https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/026/070/square/y.gandenFlickr-1-1.jpg?2017",
     "http://www.gardeningaustin.com/uploads/2/7/1/7/27175817/4448763_orig.jpg"];


var captionImages =["Pink Oreos, Yum","Unicorn Cloud","Pink Pomeranian","Sakura Tree","Dragon Fruit"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,3000); // Next
