const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');
const admin = require('./routes/admin');
const orders = require('./routes/order');


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

// Index Route
app.get('/', (req, res) => {
    res.send('<h1>VFC APIs</h1> <p>'+
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

