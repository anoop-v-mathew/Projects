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
  const query = {"email": VendorUpdate.email};
  Vendor.updateOne(query, UpdatedVendor, callback)
}

module.exports.getVendorByEmail = function(email, callback) {
  //console.log('email_models:' + email)
  const query = {"VendorEmail": email};
  //console.log('query:' +JSON.stringify( query));
  Vendor.findOne(query, callback);
  //console.log('Vendor' +JSON.stringify( Vendor));
}