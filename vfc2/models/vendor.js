const mongoose = require('mongoose');
const config = require('../config/database'); 
const ChargesSchema = mongoose.Schema({
    name:{
      type: String,
      required: true
    },
    type:{
      type: String,
      required: true
    },
    value:{
      type: Number,
      required: true
    },
    applicable:{
      type: mongoose.Schema.Types.Mixed
    }
});

const ItemsSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  currency:{
    type: String,
    required: true
  },
  preparation_time:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  }
});

const CategoriesSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  items: [ItemsSchema]
});

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
  charges: [ChargesSchema],
  categories: [CategoriesSchema]
});



// const Menu = module.exports = mongoose.model('Vendor', MenuSchema);
const Vendor = module.exports = mongoose.model('Vendor', VendorSchema);

module.exports.getVendors = function(callback) {
  Vendor.find({}, callback);
}

module.exports.addVendor = function(newVendor, callback) {
  console.log('Vendor' +JSON.stringify( newVendor));
  newVendor.save(callback);
}

module.exports.addcategories = function(email, Menu,  callback){
  
  const query = {"VendorEmail": email};
  const Name = Menu.categories[0].name;
  const Items = [];

  console.log('email:'+ email + 'query:' + JSON.stringify(query) + 'name: '+ Name );
  Vendor.update(query,{$push:{
    categories:
    {
      name: Name, 
      items: []
    }
  
  }
}, callback);

}

module.exports.addCharge = function(email, Menu,  callback){
  
  const query = {"VendorEmail": email};
  const Name = Menu.charges.name;
  const Type = Menu.charges.type;
  const Value = Menu.charges.value;
  const Applicable = Menu.charges.applicable;

  console.log('email:'+ email + 'query:' + JSON.stringify(query) + 'name: '+ Name );
  Vendor.update(query,{$push:{
    charges:
    {
      name: Name,
      type: Type,
      value: Value,
      applicable: Applicable
    }
  
  }
}, callback);

}

module.exports.addMenuItem = function(email, Menu, callback){
  
  const query = {"VendorEmail": email, "categories.name": Menu.categories[0].name};
  const Name = Menu.categories[0].items[0].name;
  const Price = Menu.categories[0].items[0].price;
  const Currency = Menu.categories[0].items[0].currency;
  const Preparation_time = Menu.categories[0].items[0].preparation_time;
  const Type = Menu.categories[0].items[0].type

  //console.log('email:'+ email + 'query:' + JSON.stringify(query) + 'name: '+ Name );
  Vendor.update(
    query,
    {$push:{"categories.$.items":{
        
       name:Name,
       price: Price,
       currency: Currency,
       preparation_time: Preparation_time,
       type: Type
      }
    }
  }, callback);

}

module.exports.UpdateCharge = function(email, Menu, callback){
  
  const query = {"VendorEmail": email,"charges.name": Menu.charges[0].name};
  const Name = Menu.charges[0].name;
  const Type = Menu.charges[0].type;
  const Value = Menu.charges[0].value;
  const Applicable = Menu.charges[0].applicable;

  console.log('email:'+ email + 'query:' + JSON.stringify(query) + 'name: '+ Name );
//   Vendor.update(query,{$set:{
//     charges:[
//     {
//       name: Name,
//       type: Type,
//       value: Value,
//       applicable: Applicable
//     }]
  
//   }
// },false, true, callback);

}

module.exports.UpdateMenuItem = function(email, Menu, callback){
  
  const query = {"VendorEmail": email, "categories.name": Menu.categories[0].name};
  const Name = Menu.categories[0].items[0].name;
  const Price = Menu.categories[0].items[0].price;
  const Currency = Menu.categories[0].items[0].currency;
  const Preparation_time = Menu.categories[0].items[0].preparation_time;
  const Type = Menu.categories[0].items[0].type

  //console.log('email:'+ email + 'query:' + JSON.stringify(query) + 'name: '+ Name );
  Vendor.update(
    query,
    {$set:{"categories.$.items":{
        
       name:Name,
       price: Price,
       currency: Currency,
       preparation_time: Preparation_time,
       type: Type
      }
    }
  }, callback);

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
  
  const query = {"VendorEmail": email};
  Vendor.findOne(query, callback);
  
}

module.exports.getMenuByEmail = function(email, callback) {
  
  const query = {"VendorEmail": email};
  Vendor.findOne(query, categories, callback);
  
}

