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
        // for (let x=0; x < vendors.length; x++) {
        //     vendors[x].charges = undefined;
        //     vendors[x].categories = undefined;
        // }
        return res.json(vendors);
    });
});

// Delete Vendor
// router.delete('/deleteVendor', (req, res, next) => {
//     res.send('deleteVendor API Endpoint');
// });

// Add Vendor
router.post('/addVendor', (req, res, next) => {
    console.log("In /admin/addVendor");
    let newVendor = new Vendor;
    console.log("New Vendor Name: " + req.body.VendorName);
    newVendor.VendorName = req.body.VendorName;
    newVendor.VendorPhone = req.body.VendorPhone;
    newVendor.VendorEmail = req.body.VendorEmail;
    newVendor.VendorOwner = req.body.VendorOwner;
    newVendor.VendorLocation.floor = req.body.floor;
    newVendor.VendorLocation.tower = req.body.tower;
    newVendor.VendorLocation.campus = req.body.campus;
    console.log("New Vendor: "+ JSON.stringify( newVendor));
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
router.post('/UpdateVendor', (req, res, next) => {
    console.log("In /admin/UpdateVendor");
    let newVendor = new Vendor;
    newVendor.VendorName = req.body.VendorName;
    newVendor.VendorPhone = req.body.VendorPhone;
    newVendor.VendorEmail = req.body.VendorEmail;
    newVendor.VendorOwner = req.body.VendorOwner;
    newVendor.VendorLocation = req.body.VendorLocation;
    Vendor.UpdateVendor(newVendor, (err, vendor) => {
        //console.log('new' + newVendor.VendorName);
        if (err) {
            res.json({success: false, msg: 'Failed to update Vendor. Error: ' + err});
        } else {
            let newVendorUser = new User;
            newVendorUser.vendorName = req.body.VendorName;
            newVendorUser.userDisplayName = req.body.VendorOwner;
            newVendorUser.email= req.body.VendorEmail;
            //newVendorUser.password= req.body.VendorPassword;
            //newVendorUser.userType.push("customer"); // a vendor user is also a customer
            //newVendorUser.userType.push("vendor");
            User.UpdateUser(newVendorUser, (err, user) => {
                if (err) {
                  res.json({success: false, msg: 'Update Vendor: ' + vendor.VendorName + '. Failed to add Vendor User. Error: ' + err});
                } else {
                  res.json({success: true, msg: 'Updated Vendor: ' + vendor.VendorName + '. Added Vendor User: ' + user.userDisplayName});
                }
            });
        }
    });
});



// Get Specific Vendor
router.get('/getVendor/:email', (req, res, next) => {
    console.log("In /admin/getVendor");
    var username = req.params.email;

    Vendor.getVendorByEmail(username,(err, vendor) => {

        if (err) throw err;
        if (!vendor) {
            return res.json({success: false, msg: 'Vendors not found'});
        }

        return res.json(vendor);

    });
});

router.post('/DeleteVendor', (req, res, next) => {
console.log("In /admin/DeleteVendor" + req.body.email);
var email = req.body.VendorEmail;
Vendor.DeleteVendor(email,(err, vendor) => {

    if (err) {
        res.json({success: false, msg: 'Failed to Delete Vendor. Error: ' + err});
      } else {
          User.DeleteUser(email, (err, vendor) => {
              if(err){
                res.json({success: false, msg: 'Failed to Delete User. Error: ' + err});
              }
              else{
                res.json({success: true, msg: 'Deleted Succefully: '+ email});
              }
          })

      }
}
)
});


router.get('/Menu/:email', (req, res, next)=> {
    console.log("In /admin/Menu");
    var username = req.params.email;

    Vendor.getMenuByEmail(username,(err, vendor) => {

        if (err) throw err;
        if (!vendor) {
            return res.json({success: false, msg: 'Vendors not found'});
        }

        return res.json(vendor);
    });

})

router.put('/Addcategories/:email',(req, res, next) =>{
    console.log("In /Menu/Addcategories");
    var username = req.params.email;
    let Menu = new Vendor;
    let VendorHold = new Vendor;



    Menu.categories = req.body.categories;

       console.log('Menu: ' +JSON.stringify(Menu.categories));

    Vendor.addcategories(username, Menu ,(err, vendor)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Add categories. Error: ' + err});
          }
          else{
            res.json({success: true, msg: 'Add categories Succefully: '});
          }

    })

} )

router.put('/AddMenuItem/:email',(req, res, next) =>{
    console.log("In /admin/AddMenuItem");
    var username = req.params.email;
    Vendor.addMenuItem(username, req.body, (err, vendor) => {
        if(err) {
            res.json({success: false, msg: 'Failed to Add Menu item. Error: ' + err});
          }
          else {
            res.json({success: true, msg: 'Added Menu Item Succefully: '});
          }
    })
})

router.put('/Addcharge/:email',(req, res, next) =>{
    console.log("In /Menu/Addcategories");
    var username = req.params.email;
    let Menu = new Vendor;
    Menu.charges = req.body.charges;

       console.log('Menu: ' +JSON.stringify(Menu.charges));

    Vendor.addCharge(username, Menu ,(err, vendor)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Add categories. Error: ' + err});
          }
          else{
            res.json({success: true, msg: 'Add categories Succefully: '});
          }

    })

} )

router.put('/UpdateItem/:email',(req, res, next) =>{
    console.log("In /admin/UpdateItem");
    var username = req.params.email;
    let Menu = new Vendor;
    Menu.categories = req.body.categories;

       console.log('Menu: ' +JSON.stringify(Menu.categories));

    Vendor.UpdateMenuItem(username, Menu ,(err, vendor)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Add Menu. Error: ' + err});
          }
          else{
            res.json({success: true, msg: 'Add Menu Succefully: '});
          }

    })

} )

router.put('/DeleteItem/:name', (req, res, next)=>{
    console.log("In Delete Item" + " " + req.param.name);
    var name = req.param.name;

    Vendor.DeleteItem(name, (err, vendor)=>{
        if(err){
            res.json({success: false, msg: 'Failed to delete Item. Error: ' + err});
        }
        else{
            res.json({success: true, msg: 'Delete Item Succefully: '});
        }
    })
})

router.put('/Updatecharge/:email',(req, res, next) =>{
    console.log("In /Menu/Addcharges");
    var username = req.params.email;
    let Charge = new Vendor;
    Charge.charges = req.body.charges;

       console.log('Menu: ' +JSON.stringify(Charge.charges));

    Vendor.UpdateCharge(username, Menu ,(err, vendor)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Add categories. Error: ' + err});
          }
          else{
            res.json({success: true, msg: 'Add categories Succefully: '});
          }

    })

} )
module.exports = router;
