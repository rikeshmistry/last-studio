/*jshint esversion: 6 */

// We need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body


// Step 1: Decide which tags in HTML we want to use & save them as constants at the top of the page

const bodyTag = document.querySelector("body");

// Step 2: Decide which user events i.e, click, scroll, etc, we want to trigger out code on, Here we want to listen out for any scroll events on our page

// const introductionTag = document.querySelector ("introduction");

document.addEventListener("scroll", function(){
// Do something when the h1 is clicked
// bodyTag.innerHTML = "h1 has been clicked!";
// bodyTag.style.fontSize = "50px";
// bodyTag.style.backgroundColor ="green";
// introductionTag.style.backgroundColor = "yellow"

// Do something when the page is scrolled
// console.log("Page has been scrolled! Wooo!");


// Step 3: Find out and store how far from the top of the page the scroll bar inspect
// Use window when referring to the scrollbar is it is on the browser frame

let distanceFromTop = window.scrollY;
console.log(distanceFromTop);

// If the distanceFromTop is greater then 1000 pixels, do something

if (distanceFromTop > 1000) {
  // do this
// bodyTag.style.backgroundColor = "red";
bodyTag.classList.add("brogue-active");

  } else {
// do something else
// console.log("Less than 1000 pixels")
//bodyTag.style.backgroundColor = "#f5f5f5";
bodyTag.classList.remove("brogue-active");
}

if (distanceFromTop > 4300) {
  bodyTag.classList.add("stationary-active");

} else {

  bodyTag.classList.add("stationary-active");
}

});


// Lightbox
// When we click on an image
// we want to show the lightbox
// Inside the lightbox we want to show the image we clicked on
// When we click on the lightbox we want it to disappear


// Step 1: Decide which tags in HTML we want to use and save them in constants

// Save all our images into a contant - this will be a list of images
const images = document.querySelectorAll("section img");
// Save the lightbox from the HTML side a constant
const lightbox = document.querySelector(".lightbox");
// Save the lightbox image from our html inside a constant
const lightboxImage = document.querySelector(".lightbox img");

// Let's look at what's saves in images
console.log(images);

// Our images constant contains a list of images. We want to add an event listener to all of them. To do this we use a loop. In Javascript this is called a forEach function. It looks through all of our images & applies the same code.
images.forEach(image => {
  // Step 2: Add a click event listeneer to all the images

image.addEventListener("click", function() {
    console.log("image clicked");
  // Step 3: Show the lightbox
  lightbox.classList.add("fadeIn");
  // Step 4: Show the right image
  // Save the image src attirbute from the imafe we click on
  // The keyword "this" references the image we have clicked on - THIS image. .getAttribute allows us to store an attribute. We want the src attribute because it contains the image location
  let imageSrc = this.getAttribute("src");
  console.log(imageSrc);
  // Set the lightbox image src attribute to the one we save
  lightboxImage.setAttribute("src", imageSrc);
  });
});


// Step 4: When we click on the lightbox, remove the fadeIn class
lightbox.addEventListener("click", function(){

  lightbox.classList.remove("fadeIn");
});

// bodyTag.style.backgroundColor = "#000000";
// bodyTag.innerHTML = "Hi, I'm Javascript on your site and have ruined it"
// document relates to the html
// EventLister is a
