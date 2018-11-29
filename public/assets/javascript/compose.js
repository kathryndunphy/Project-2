$(document).ready(function () {
    // Dropdown menu
    $(".dropdown-button").dropdown();
//added non working function to take urls and add them to photos
    function uploadPhoto() {
        //define urls either as object or variables
        let thumbUrl = ""
        let photoUrl = ""
        var widget = cloudinary.createUploadWidget({
            cloudName: "dm2obdaq7",
            uploadPreset: "doggie",
            cropping: "server"
        }, (error, result) => {
            console.log(result)
            //forEach function for results to urls
            
            if (result.event === "success"){
                thumbUrl = result.info.thumbnail_url
                photoUrl = result.info.url 
                
            }

        });
        widget.open("https://my.example.come/my_example_image.jpg");
        cloudinary.applyUploadWidget('#upload_widget_opener', {
            cloudName: 'dm2obdaq7',
            uploadPreset: 'doggie',
            tags: [""],
            cropping: true,
            folder: 'doggie'
        }, (error, result) => {
            createPhotoRef(result)
        });
    }

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