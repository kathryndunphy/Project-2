// commented out to create testing ground for uploads see also index.html ch

// function displayLogin() {
//     $("#npm -signup").fadeOut(200);
//     $("#ani-login").fadeIn(1000);
// }

// function displaySignup() {
//     $("#ani-login").fadeOut(200);
//     $("#ani-signup").fadeIn(1000);
// }

// // Stop a function from running too many times
// function debounce(func, wait = 10, immediate = true) {
//     let timeout;

//     return function() {
//         const context = this, args = arguments;

//         function later() {
//             timeout = null;

//             if (!immediate) func.apply(context, args);
//         };

//         const callNow = immediate && !timeout;
        
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
        
//         if (callNow) func.apply(context, args);
//     };
// }

// function detectDevice() {
//     switch ($("#ani-device-detector").css("font-size")) {
//         // Extra large, large
//         case "4px":
//         case "3px":
//             $(".ani-index").addClass("ani-vertical-align-wrapper");
//             $(".ani-index").css({"margin": "0"});

//             break;

//         // Medium, small
//         case "2px":
//         case "1px":
//             $(".ani-index").removeClass("ani-vertical-align-wrapper");
//             $(".ani-index").css({"margin": "2.5em 0"});

//             break;

//     }
// }

// // Check device size before page loads and when window is resized
// detectDevice();

// $(window).resize(debounce(detectDevice));

$(document).ready(function() {
    ///cloudinary
// $("#addStory").on("submit", function updateStory() {
// createPhotoRef()
// })

function createPhotoRef(){
    
}



//  const keys = require('../../../keys.js')
//  var api = new Cloudsearch(keys.cloudinary)
// function uploadPic(){
//     $.get()
// }

//     var cloudinary = require('cloudinary')
//     $.cloudinary.config({ 
//         cloud_name: 'dm2obdaq7', 
//         api_key: '916353386216456', 
//         api_secret: 'YCyGM3utmOnYGLES_ckQFS-_RB4' 
//       });
//     cloudinary.v2.api.resources(
//         function(error, result) {
//             if(error){console.log(error)}
//             else{
//           console.log(result.rate_limit_allowed,
//                       result.rate_limit_remaining,
//                       result.rate_limit_reset_at)}
//           })
    // const photoApi = cloudinary://916353386216456:YCyGM3utmOnYGLES_ckQFS-_RB4@dm2obdaq7
    // var cloudinary = require('cloudinary')
    //cloudinary.v2.api.resources(function(error, result){console.log(result)});

    // cloudinary.uploader.upload("my_picture.jpg", function(result) { console.log(result) })

    // displaySignup();
    
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav({"closeOnClick": true});
});