const mongoose = require('mongoose');
const config = require('../config/database'); 

// Order schema

const OrderSchema = mongoose.Schema({
  customerEmail: {
    type: String,
    required: true
  },
  orderForVendor: {
    type: String,
    required: true
  },
  orderPlacedAt: {
    type: Date,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  },
  order: [{
    itemName: {
      type: String,
      required: true      
    },
    itemValue: {
      type: Number,
      required: true
    },
    itemCurrency: {
      type: String,
      required: true      
    },    
    itemPreparationTime: {
      type: Number,
      required: true
    }
  }]
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOpenCustomerOrders = function(email, callback) {
  console.log(email);
  Order.find({ "customerEmail" : email, "orderStatus" : "Open" }, callback);
}

module.exports.addOrder = function(newOrder, callback) {
  //console.log('Vendor' +JSON.stringify( newVendor));
  newOrder.orderStatus = "Open";
  newOrder.save(callback);
}

