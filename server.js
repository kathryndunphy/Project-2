/**********************************
    Initialize
***********************************/

//Import packages
const express        = require("express");
const exphbs         = require("express-handlebars");
const path           = require("path");
const methodOverride = require("method-override");
const bodyParser     = require("body-parser");
const aws            = require('aws-sdk');
const googleCloud    = require('@google-cloud/storage');
const cookieParser   = require("cookie-parser");
var cloudinary = require('cloudinary');
// ///cloudinary
// const keys = require('./keys.js')
// var cloudkey = new Cloudsearch(keys.cloudinary)
// Use express
const app  = express();
const PORT = process.env.PORT || 3000;


/**********************************
    Set models
***********************************/

// Import our models
const aniDB = require(path.join(__dirname, "models"));



/**********************************
    Set views
***********************************/

// Set public directory
const directory_public = path.join(__dirname, "public");
app.use(express.static(directory_public));

// Set up Express to handle parsing data
app.use(bodyParser.json());
app.use(bodyParser.text());

// Set extended to true so that we can parse arrays of input fields (e.g. name="captions[0]")
app.use(bodyParser.urlencoded({"extended": true}));

// Set handlebars
app.engine(".hbs", exphbs({
    "defaultLayout": "main",
    "extname"      : ".hbs"
}));

app.set("view engine", ".hbs");

// Set aws
//https://www.npmjs.com/package/aws-sdk

//https://res.cloudinary.com/
// cloudinary.config({ 
//     cloud_name: 'dm2obdaq7', 
//     api_key: '916353386216456', 
//     api_secret: 'YCyGM3utmOnYGLES_ckQFS-_RB4' 
//   });
 
// Set google cloud
// https://www.npmjs.com/package/@google-cloud/storage

// Set cookie
app.use(cookieParser());


/**********************************
    Set controllers
***********************************/

// Override POST methods to handle PATCH and DELETE
app.use(methodOverride("_method"));

// Set routers
const router_html = require(path.join(__dirname, "controllers", "html_routes.js"));
const router_api  = require(path.join(__dirname, "controllers", "api_routes.js"));

// Talk to routers
app.use("/", router_html);
app.use("/api", router_api);


/**********************************
    Listen for connections on the port
***********************************/

// Uncomment force to reset the database
aniDB.sequelize.sync(/*{"force": true}*/).then(function() {
    app.listen(PORT, () => console.log(`App listening on ${PORT}.`));
});