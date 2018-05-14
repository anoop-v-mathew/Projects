const mongoose = require('mongoose');
const config = require('../config/database'); 

// Vendor schema

const LocationSchema = mongoose.Schema({
  Location: {
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
}});

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
  VendorLocation: LocationSchema,
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
