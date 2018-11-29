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
    // event.preventDefault()
    ///cloudinary
    // $("#ani-title")= titleInput
    // $("#ani-caption")= captionInput
$("#ani-form-compose").hide()
// $(document).on("submit","#addStory",postStory)
// function previewIMG(full){
    
//     $("#previewIMG").src = full
// }
function prepareStory(thumb, full){
    let small = thumb
    let fullSize = full
    $(document).on("submit", function(small, fullSize){
        $("#ani-title")= titleInput
    $("#ani-caption")= captionInput
        postStory({

            small: thumbnail,
            fullSize: url,
            titleInput: title,
            captionInput: title
        })
    })
    
}
function showTitleForm(photoUrls){
    console.log(photoUrls)
    let thumb = photoUrls[0]
    let full = photoUrls[1]
    $("#ani-form-compose").show()
    
    postStory(thumb, full)

}
function openWidget(){
    const  photoUrls = []
    var widget = cloudinary.createUploadWidget({
        cloudName: "dm2obdaq7",
        uploadPreset: "doggie",
        cropping: "server"
    }, (error, result) => {
        console.log(result)
        
        /// checks for successful upload then saves values to an array let photoUrls = []
        if (result.event === "success"){
            photoUrls.push(result.info.thumbnail_url)
            photoUrls.push(result.info.url) 
            console.log(photoUrls)
            showTitleForm(photoUrls)
        }

        // function handleStory(photoUrls){
            
        //     console.log(photoUrls)
        //}
    });
    console.log(photoUrls)
    widget.open("https://my.example.come/my_example_image.jpg");
    cloudinary.applyUploadWidget('#upload_widget_opener', {
        cloudName: 'dm2obdaq7',
        uploadPreset: 'doggie',
        tags: [""],
        cropping: true,
        folder: 'doggie'
    }, (error, result) => {
        console.log(result)
    });
    console.log(photoUrls)

}

openWidget()



    // displaySignup();
    
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav({"closeOnClick": true});
});