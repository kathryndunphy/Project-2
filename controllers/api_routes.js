/**********************************
    Initialize
***********************************/

// Import packages
const express = require("express");
const path    = require("path");

// Create an instance of Router
const router = express.Router();

// Import bcrypt
const bcrypt     = require("bcrypt");
const saltRounds = 12;

// Import Dropzone
const multer = require("multer");
const upload = multer({"dest": "uploads"});
const sizeOf = require("image-size");

// Cookie will expire in 1 week
const cookieOptions = {
    "expires" : new Date(Date.now() + 604800000),
    "httpOnly": (process.argv[2] !== "local"),
    "secure"  : (process.argv[2] !== "local")
};

// Default profile photos
const defaultPhotos = [
    "https://bit.ly/2FONWzE",
    "https://bit.ly/2FGDjPw",
    "https://bit.ly/2PVSmK5",
    "https://bit.ly/2TDS0ps",
    "https://bit.ly/2RdukGH",
    "https://bit.ly/2TJRJkG",
    "https://bit.ly/2Rc7vDw",
    "https://bit.ly/2r1YXnh",
    "https://bit.ly/2DJj9C0"
];