// const path = require("path");

// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();

// // This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
// app.use(cors());

// // Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./images"); //important this is a direct path fron our current file to storage location
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "--" + file.originalname);
//   },
// });

// // Route To Load Index.html page to browser
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// // The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// // You can create multiple middleware each with a different storage engine config so save different files in different locations on server
// const upload = multer({ storage: fileStorageEngine });

// // Single File Route Handler
// app.post("/single", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("Single File upload success");
// });

// app.listen(3333);
// config inicial

import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
require('dotenv').config()

const app = express()

app.use(cors());
app.use(express.json())

const logRoutes = require('./routes/logRoutes')
app.use('/log', logRoutes)

const importRoutes = require('./routes/importRoutes')
app.use('/import', importRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const url_mongose = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.s9hsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose
    .connect(
        url_mongose
    )
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(process.env.PORT)
    })
    .catch((err) => console.log(err))