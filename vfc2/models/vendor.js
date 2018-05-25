const mongoose = require('mongoose');
const config = require('../config/database'); 

// Vendor schema for Admin
const VendorSchema = mongoose.Schema({
  VendorName: {
    type: String,
    required: true
  },
  VendorPhone: {
    type: String,
    required: true
  },
  VendorEmail: {
    type: String,
    required: true
  },
  VendorOwner: {
    type: String,
    required: true
  },
  VendorLocation: {
    campus: {
      type: String,
      required: true
    },
    tower: {
      type: String,
      required: true
    },
    floor: {
      type: String,
      required: true
    }
  },
  charges: {
    type: mongoose.Schema.Types.Mixed
  },
  categories: {
    type: mongoose.Schema.Types.Mixed
  }
});

const Vendor = module.exports = mongoose.model('Vendor', VendorSchema);

module.exports.getVendors = function(callback) {
  Vendor.find({}, callback);
}

module.exports.addVendor = function(newVendor, callback) {
  //console.log('Vendor' +JSON.stringify( newVendor));
  newVendor.save(callback);
}

module.exports.UpdateVendor = function(VendorUpdate, callback){
  const query = {"VendorEmail": VendorUpdate.VendorEmail};
  console.log('query:' +JSON.stringify( query));
  const Name = VendorUpdate.VendorName;
  const Email = VendorUpdate.VendorEmail;
  const Phone = VendorUpdate.VendorPhone;
  const Owner = VendorUpdate.VendorOwner;
  const Location = VendorUpdate.VendorLocation;

  //Vendor.update(query, VendorUpdate, callback);
  Vendor.update(query,{$set: {
    VendorName: Name, 
    VendorEmail: Email, 
    VendorPhone:Phone, 
    VendorOwner:Owner,
    VendorLocation: Location
  }} , callback);

}

module.exports.DeleteVendor = function(email, callback){
  const query={"VendorEmail": email};
  Vendor.deleteOne(query, callback);
}
module.exports.getVendorByEmail = function(email, callback) {
  //console.log('email_models:' + email)
  const query = {"VendorEmail": email};
  //console.log('query:' +JSON.stringify( query));
  Vendor.findOne(query, callback);
  //console.log('Vendor' +JSON.stringify( Vendor));
}