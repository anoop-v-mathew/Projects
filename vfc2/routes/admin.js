const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

const Vendor = require('../models/vendor');
const User = require('../models/user');

// Get Vendors
router.get('/getVendors', (req, res, next) => {
    console.log("In /admin/getVendors");
    Vendor.getVendors((err, vendors) => {
        if (err) throw err;
        if (!vendors) {
            return res.json({success: false, msg: 'Vendors not found'});
        }
        for (let x=0; x < vendors.length; x++) {
            vendors[x].charges = undefined;
            vendors[x].categories = undefined;
        }    
        return res.json(vendors);

        
       
    });
});

// Delete Vendor
router.delete('/deleteVendor', (req, res, next) => {
    res.send('deleteVendor API Endpoint');
});

// Add Vendor
router.post('/addVendor', (req, res, next) => {
    console.log("In /admin/addVendor");
    let newVendor = new Vendor;
    newVendor.VendorName = req.body.VendorName;
    newVendor.VendorPhone = req.body.VendorPhone;
    newVendor.VendorEmail = req.body.VendorEmail;
    newVendor.VendorOwner = req.body.VendorOwner;
    newVendor.VendorLocation.floor = req.body.floor;
    newVendor.VendorLocation.tower = req.body.tower;
    newVendor.VendorLocation.campus = req.body.campus;
    Vendor.addVendor(newVendor, (err, vendor) => {
        console.log('new' + newVendor.VendorName);
        if (err) {
            res.json({success: false, msg: 'Failed to add Vendor. Error: ' + err});
        } else {
            let newVendorUser = new User;
            newVendorUser.vendorName = req.body.VendorName;
            newVendorUser.userDisplayName = req.body.VendorOwner;
            newVendorUser.email= req.body.VendorEmail;
            newVendorUser.password= req.body.VendorPassword;
            newVendorUser.userType.push("customer"); // a vendor user is also a customer
            newVendorUser.userType.push("vendor");
            User.addUser(newVendorUser, (err, user) => {
                if (err) {
                  res.json({success: false, msg: 'Added Vendor: ' + vendor.VendorName + '. Failed to add Vendor User. Error: ' + err});
                } else {
                  res.json({success: true, msg: 'Added Vendor: ' + vendor.VendorName + '. Added Vendor User: ' + user.userDisplayName});
                }
            });
        }
    });
});


//Update Vendor
router.put('/UpdateVendor', (req, res, next) => {
    console.log("In /admin/UpdateVendor");
    let newVendor = new Vendor;
    newVendor.VendorName = req.body.VendorName;
    newVendor.VendorPhone = req.body.VendorPhone;
    newVendor.VendorEmail = req.body.VendorEmail;
    newVendor.VendorOwner = req.body.VendorOwner;
    newVendor.VendorLocation.floor = req.body.floor;
    newVendor.VendorLocation.tower = req.body.tower;
    newVendor.VendorLocation.campus = req.body.campus;
    Vendor.UpdateVendor(newVendor, (err, vendor) => {
        //console.log('new' + newVendor.VendorName);
        if (err) {
            res.json({success: false, msg: 'Failed to add Vendor. Error: ' + err});
        } else {
            let newVendorUser = new User;
            newVendorUser.vendorName = req.body.VendorName;
            newVendorUser.userDisplayName = req.body.VendorOwner;
            newVendorUser.email= req.body.VendorEmail;
            newVendorUser.password= req.body.VendorPassword;
            newVendorUser.userType.push("customer"); // a vendor user is also a customer
            newVendorUser.userType.push("vendor");
            User.addUser(newVendorUser, (err, user) => {
                if (err) {
                  res.json({success: false, msg: 'Added Vendor: ' + vendor.VendorName + '. Failed to add Vendor User. Error: ' + err});
                } else {
                  res.json({success: true, msg: 'Added Vendor: ' + vendor.VendorName + '. Added Vendor User: ' + user.userDisplayName});
                }
            });
        }
    });
});

// Get Specific Vendor
router.get('/getVendor/:email', (req, res, next) => {
    console.log("In /admin/getVendor");
    var username = req.params.email;
    //console.log('email:' + username);
    Vendor.getVendorByEmail(username,(err, vendor) => {
        //console.log('Vendor:' + JSON.stringify(vendor));
        if (err) throw err;
        if (!vendor) {
            return res.json({success: false, msg: 'Vendors not found'});
        }
        //console.log('vendorName:' + vendor.VendorName);
        return res.json(vendor);
        // return res.json({
        //     success: true, 
        //     vendor: vendor,
        //     msg:'we did it: ' + username
        //   });
  
    });
});

// Update Specific Vendor
// router.put('/updateVendor/:id', (req, res, next) => {
//     res.send('updateVendor API Endpoint');
// });

module.exports = router;
