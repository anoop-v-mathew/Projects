const mongoose = require('mongoose');
const config = require('../config/database'); 

// Order schema

const OrderSchema = mongoose.Schema({
  orderedItems: [
    {
      itemName:{
        type: String,
        required: true
      },
      itemPrice:{
        type: Number,
        required: true
      },
      quantity:{
        type: Number,
        required: true
      },
      currency:{
        type: String,
        required: true
      },
      itemPrepTime:{
        type: String,
        required: true
      }
    }
  ],
  custEmail: {
    type: String,
    required: true
  },
  vendorEmail: {
    type: String,
    required: true
  },
  vendorName: {
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
  sku:{ 
    type: String,
    required:true
  }
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOpenCustomerOrders = function(email, callback) {
  console.log(email);
  Order.find({ "custEmail" : email, "orderStatus" : "Open" }, callback);
}

module.exports.getCheckoutOrder = function(sku, callback) {
  console.log("In M/order/getcheckoutOrders");
  console.log(sku);
  Order.find({"sku": sku}, callback);
}

module.exports.addOrder = function(newOrder, callback) {
  //console.log('Vendor' +JSON.stringify( newVendor));
  //newOrder.orderStatus = "Open";
  newOrder.save(callback);
}

