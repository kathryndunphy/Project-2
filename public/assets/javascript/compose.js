$(document).ready(function () {
    // Dropdown menu
    $(".dropdown-button").dropdown();
//added non working function to take urls and add them to photos
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
            $
        }

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
        
    });

}

openWidget()

    function createPhotoRef(){
        showPhoto(results)
    }
    function showphoto(){
        for(let i = 0; i<results.length; i++){
            let picURL= result.url 
            let picTitle= result.title 
            let picCap= results.caption
            $(".storyBoard").append(//located in story.hbs
              `<img>`
            )
            }
        
    }
    // Navbar for mobile
    $(".button-collapse").sideNav({
        "closeOnClick": true
    });
});