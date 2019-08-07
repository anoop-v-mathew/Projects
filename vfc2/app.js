const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
    //var gfs = Grid(conn.db);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
const users = require('./routes/users');
const admin = require('./routes/admin');
const orders = require('./routes/order');
const FileStorage = require('./routes/FileStorage');
const port = 3000;

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// User routes
app.use('/users', users);

// Vendor routes
app.use('/admin', admin);

// Order routes
app.use('/order', orders);

//File Stroage routes
app.use('/FileStorage', FileStorage);

// Index Route
app.get('/', (req, res) => {
    res.send('<h1>VFC APIs</h1> <p>' +
        '<b><u>admin - Vendors</u></b><p>' +
        'GET /admin/getVendors<br>' +
        'DELETE /admin/deleteVendor<br>' +
        'POST /admin/addVendor<br>' +
        'GET /admin/getVendor/:id<br>' +
        'PUT /admin/updateVendor/:id'
    );
});

app.listen(port, () => {
    console.log('Server started on port: ', + port);
});




