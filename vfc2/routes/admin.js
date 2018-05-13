const express = require('express');
const router = express.Router();
// const passpeort = require('passport');
// const jwt = require('jsonwebtoken');

const Vendor = require('../models/vendor');

// Get Vendors
router.get('/getVendors', (req, res, next) => {
    Vendor.getVendorsForAdmin((err, vendors) => {
        if (err) throw err;
        if (!vendors) {
            return res.json({success: false, msg: 'Vendors not found'});
        }
        console.log(vendors.toString());
        return res.json(vendors);
    });
});

// Delete Vendor
router.delete('/deleteVendor', (req, res, next) => {
    res.send('deleteVendor API Endpoint');
});

// Add Vendor
router.post('/addVendor', (req, res, next) => {
    res.send('addVendor API Endpoint');
});

// Get Specific Vendor
router.get('/getVendor/:id', (req, res, next) => {
    res.send('getVendor API Endpoint');
});

// Update Specific Vendor
router.put('/updateVendor/:id', (req, res, next) => {
    res.send('updateVendor API Endpoint');
});

module.exports = router;
