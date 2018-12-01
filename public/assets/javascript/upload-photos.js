// Change the default message
Dropzone.prototype.defaultOptions.dictDefaultMessage = "Drop photos here to upload";

let url = [];
let captions = [];

Dropzone.options.uploadWidget = {
    "paramName": "file",
    "maxFilesize": 5, // MB
    "maxFiles": 5,
    "dictDefaultMessage": "Drop photos here to upload",
    //     "headers": {
    //         // TODO: Create a random CSRF (Cross-Site Request Forgery) token for extra security measure
    // //      "x-csrf-token": document.querySelectorAll("meta[name=csrf-token]")[0].getAttributeNode("content").value
    //         "x-csrf-token": "TODO_CREATE_A_RANDOM_TOKEN_HERE"
    //     },
    "acceptedFiles": "image/*",

    "init": function () {
        this.on("success", (file, res) => {
            console.log(file);
            console.log(res);
        });

        this.on("thumbnail", file => {
            if (file.width < 200 || file.height < 200) {
                file.rejectDimensions();

            } else {
                file.acceptDimensions();

            }
        });
    },

    "accept": function (file, done) {

        file.acceptDimensions = done;

        file.rejectDimensions = function () {
            done("The image must be at least 200 x 200");
        };
    }, 
    "success": function (file, serverResponse) {
        console.log("Success");
    }
};

$(document).ready(function () {
    // Dropdown menu
    $(".dropdown-button").dropdown();

    // Navbar for mobile
    $(".button-collapse").sideNav({
        "closeOnClick": true
    });

});

function send() {

    let files = document.forms[0].dropzone.files;

    for (var i = 0; i < files.length; i++) {
        // console.log(document.getElementById(i.toString()).value)
        if (document.getElementById(i.toString()).value == "") {
            return;
        } else {
            captions.push(document.getElementById(i.toString()).value);
        }
    }

    let payload = {
        urls: url,
        captions: captions,
        title: document.getElementById("title").value
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/create-story');
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = () => {
        window.location = xhr.response;
    };
}

function close() {
    document.getElementById("add_dialogue").innerHTML = "";
}

function publish() {

    let files = document.forms[0].dropzone.files

    let input = '<label>Title for $FILE_NAME</label><input type="text" id="$ID">';
    let button = '<button onclick="send()" type="submit" class="btn-large waves-effect waves-light" title="Click to Submit.">Submit</button>'
    let close_button = ''//'<button onclick="close()" class="btn-large waves-effect waves-light" title="Click to Cancel.">Cancel</button>';
    let html = '<dialog id="submit_dialog"><lable>Story Title</label><input type="text" id="title"><br />'
    let flag = false;
    let good_files = [];

    for (var i = 0; i < files.length; i++) {
        let element = files[i];
        if (element.status == 'success') {
            flag = true;
            good_files.push(element);
            let temp = input.replace("$FILE_NAME", element.name).replace("$ID", i);
            html = html + temp;

            url.push('http://test.com');
        }
        if (i == files.length - 1) {
            document.forms[0].dropzone.files = good_files;
            if (flag) {
                html = html + "<br />" + button + "<br />" + close_button + "</dialog>";
                document.getElementById("add_dialogue").innerHTML = html;
                document.getElementById("submit_dialog").showModal();
            }
        }
    };
}