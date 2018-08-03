const mongoose = require('mongoose');
const config = require('../config/database'); 

// Order schema
const FoodItem = mongoose.Schema({
  name: {
    type: String,
    required: true      
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true      
  },
  quantity:{
    type: String,
    required: true 
  },
  itemPreparationTime: {
    type: String,
    required: true
  }
});
const OrderSchema = mongoose.Schema({
  OrderedList: [FoodItem],
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
  sku:{
    type: String,
    required:true
  },
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOpenCustomerOrders = function(email, callback) {
  console.log(email);
  Order.find({ "customerEmail" : email, "orderStatus" : "Open" }, callback);
}

module.exports.getCheckoutOrder = function(sku, callback) {
  console.log(email);
  Order.find({"sku": sku}, callback);
}

module.exports.addOrder = function(newOrder, callback) {
  //console.log('Vendor' +JSON.stringify( newVendor));
  newOrder.orderStatus = "Open";
  newOrder.save(callback);
}

module.exports.addorderitems = function(email, newOrderItem, callback){
  

  console.log('email:'+ email + ' category:' + JSON.stringify(category.items[0]));
  const query = {"VendorEmail": email, "categories.name": category.name};
  console.log('Qry : ' + JSON.stringify(query));
  Vendor.update(
    query,
    { $push: {
      "categories.$.items": category.items[0]
    }
  }, callback);
}

