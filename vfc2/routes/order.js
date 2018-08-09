const express = require('express');
const router = express.Router();

const Order = require('../models/order');

const paypal = require('paypal-rest-sdk');

const randomstring = require("randomstring");

//paypal configuration

paypal.configure({
    'mode': 'sandbox', //
    'client_id': 'AXw3uxWPTBb-KjHTB56GXgwfrMK5et1RrrbVvJwCAIPd9ImxwDLm1lj8si6HnOFNHEdWQQSmAUAHCGcj',
    'client_secret': 'EGgE0KzsCScMXTapD5Ie4j7joctcplbJOhABSRkQdK7r4dLe0XB1Ys0VtDgccXliaz0rTPkMsWaBuiss'
})

router.post('/pay', (req, res)=> {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:4200/Success",
            "cancel_url": "http://localhost:4200/Failure"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };
})

// Get Orders
router.get('/getOrders/:email', (req, res, next) => {
    console.log("In /order/getOrders");
    Order.getCustomerOrders(req.params.email, (err, orders) => {
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

router.get('/getOpenOrders/:email/:status', (req, res, next) => {
    console.log("In /order/getOpenOrders");
    console.log(req.params.email);
    console.log(req.params.status);
    Order.getVendorOrders(req.params.email, req.params.status, (err, orders) => {
        if (err) throw err;
        //console.log(orders.length);
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

router.get('/getOpenOrders/:email', (req, res, next) => {
    console.log("In /order/getOpenOrders");
    Order.getCustomerOpenOrders(req.params.email, (err, orders) => {
        if (err) throw err;
        console.log(orders.length);
        if (!orders || orders.length == 0) {
            return res.json({success: false, msg: 'Orders not found'});
        }  
        return res.json(orders);
    });
});

router.get('/getCheckoutOrders/:sku', (req, res, next) => {
    console.log("In /order/getcheckoutOrders");
    Order.getCheckoutOrder(req.params.sku,  (err, orders) => {
        if (err) throw err;
        //console.log(orders.length);
        if (!orders || orders.length == 0) {
            return res.json({success: false, msg: 'Orders not found'});
        }
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
    
    let orderList = new Order;

    let newOrder = new Order;
    newOrder.custEmail = req.body.customerEmail;
    newOrder.vendorEmail = req.body.orderForVendor;
    newOrder.vendorName = req.body.vendorName;
    newOrder.orderStatus = 'Open';
    newOrder.orderedItems = req.body.OrderedList;
    newOrder.sku = randomstring.generate(7);
    console.log('Order: ' +JSON.stringify(newOrder));
    
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

router.post('/submitOrder/:sku',(req, res, next) =>{
    console.log("In /order/submitOrder");
    var sku = req.params.sku;
    //let order = new Order;
    var orderStatus = 'Submitted';

       //console.log('Menu: ' +JSON.stringify(Menu.categories));

    Order.UpdateStatus(req.params.sku, orderStatus ,(err, order)=>{
        if(err){
            res.json({success: false, msg: 'Failed to Add Menu. Error: ' + err});
          }
          else{
            res.json({success: true, msg: 'Add Menu Succefully: '});
          }

    })

} )

module.exports = router;