const express = require('express');
const router = express.Router();

const Order = require('../models/order');

const randomstring = require("randomstring");

// Get Orders
router.get('/getOrders/:email', (req, res, next) => {
    console.log("In /order/getOrders");
    Order.getOpenCustomerOrders(req.params.email, (err, orders) => {
        if (err) throw err;
        console.log(orders.length);
        if (!orders || orders.length == 0) {
            return res.json({success: false, msg: 'Orders not found'});
        }
        // for (let x=0; x < vendors.length; x++) {
        //     vendors[x].charges = undefined;
        //     vendors[x].categories = undefined;
        // }    
        return res.json(orders);
    });
});

// Delete Vendor
// router.delete('/deleteVendor', (req, res, next) => {
//     res.send('deleteVendor API Endpoint');
// });

// Add Order
router.post('/addOrder', (req, res, next) => {
    console.log("In /order/addOrder");
    
    let orderList = new Array();


    orderList.push(req.body.itemName);
    orderList.push(randomstring.generate(7));
    orderList.push(req.body.itemValue);
    orderList.push(req.body.itemCurrency);
    orderList.push(req.body.itemQuantity);
    orderList.push(req.body.itemPreparationTime);

    let newOrder = new Order;
    newOrder.customerEmail = req.body.customerEmail;
    newOrder.orderForVendor = req.body.orderForVendor;
    newOrder.orders = orderList;
    // newOrder.orders.name = req.body.itemName;
    // newOrder.orders.sku = randomstring.generate(7);
    // newOrder.orders.Price = req.body.itemValue;
    // newOrder.orders.currency = req.body.itemCurrency;
    // newOrder.orders.quantity = req.body.itemQuantity;
    // newOrder.orders.itemPreparationTime = req.body.itemPreparationTime;
    let dt = new Date();
    newOrder.orderPlacedAt = dt.toISOString();
    console.log(newOrder.orderPlacedAt);
    Order.addOrder(newOrder, (err, order) => {
        console.log('new' + newOrder.customerEmail);
        if (err) {
            res.json({success: false, msg: 'Failed to add order. Error: ' + err});
        } else {
          res.json({success: true, msg: 'Added Order: ' + order.customerEmail});
        }
    });
});

module.exports = router;