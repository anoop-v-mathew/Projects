const express = require('express');
const router = express.Router();

const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const config = require('../config/database');

var conn = mongoose.connection;

conn.once('open', function(){
    console.log('DB connection open');
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('upload');

});

const storage = new GridFsStorage({
    url: config.database,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

  router.post('/upload', (req, res) => {
    console.log("In /FileStorage/Upload");
    
    upload(req,res, (err) => {
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
        res.json({error_code:0, error_desc: null, file_uploaded: true});
    });
});

module.exports = router;