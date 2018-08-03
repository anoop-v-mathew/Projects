const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

//for gridfs file upload

const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')


paypal.configure({
    'mode': 'sandbox', //
    'client_id': 'AXw3uxWPTBb-KjHTB56GXgwfrMK5et1RrrbVvJwCAIPd9ImxwDLm1lj8si6HnOFNHEdWQQSmAUAHCGcj',
    'client_secret': 'EGgE0KzsCScMXTapD5Ie4j7joctcplbJOhABSRkQdK7r4dLe0XB1Ys0VtDgccXliaz0rTPkMsWaBuiss'
})

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

//File upload
app.use(methodOverride('_method'));


app.post('/pay', (req, res)=> {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:4200/Success",
            "cancel_url": "http://localhost:4200/Failure"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };
})

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

