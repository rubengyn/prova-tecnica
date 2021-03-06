
const routerImport = require('express').Router()
import { readFile } from 'fs';
const LogModel = require('../models/Log')
const multer = require("multer");
const utilsLog = require("../utils/utilsLog")

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./tmp");
    },
    filename: (req, file, cb) => {
        cb(null, "auth.json");
    },
});

const upload = multer({ storage: fileStorageEngine });

routerImport.post("/", upload.single("file"), (req, res) => {
    console.log(req.file);
    readFile('tmp/auth.json', 'utf8', (err, data) => {
        if (err) throw err;
        var lines = data.split("\n");
        lines.forEach(async line => {
            if (line.split(' ').length > 5) {
                let lineJson = utilsLog.lineToJSON(line)
                try {
                    await LogModel.create(lineJson)
                    console.log(lineJson);

                } catch (error) {
                    res.status(500).json({ erro: error })
                }
            }
        })
    });
    res.send("Single File upload success");
});

module.exports = routerImport
