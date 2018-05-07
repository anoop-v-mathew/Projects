export class Init {
    load() {
      // console.log('columnSettings : ' + localStorage.getItem('FoodCourt.columnSettings'));
      // if (localStorage.getItem('FoodCourt.columnSettings') === null
      // || localStorage.getItem('FoodCourt.columnSettings') === undefined
      // || localStorage.getItem('FoodCourt.columnSettings') === '[]') {
      //   const columnSettings = [
      //       {
      //           columnName: 'Vendor Name',
      //           show: true,
      //           fieldName: 'VendorName'
  
      //       },
      //       {
      //           columnName: 'Vendor Phone',
      //           show: true,
      //           fieldName: 'VendorPhone'
  
      //       }
      //   ];
      //   localStorage.setItem('FoodCourt.columnSettings', JSON.stringify(columnSettings));
      // }
      // console.log('vendors : ' + localStorage.getItem('FoodCourt.vendors'));
      if (localStorage.getItem('FoodCourt.vendors') === null
      || localStorage.getItem('FoodCourt.vendors') === undefined
      || localStorage.getItem('FoodCourt.vendors') === '[]') { 
        const vendors = [
          {
            ID: 1,
            VendorName: 'Swad E Punjab',
            VendorPhone: '9741 000 588',
            VendorEmail: 'swadepunjab.wipro.ec4@gmail.com',
            VendorPassword: 'Pa$$w0rd',
            VendorOwner: 'Mr. Ram Prasad',
            VendorLocation: {
              campus: 'Wipro EC4',
              tower: '17',
              floor: 'Basement'
            },
            charges: [
              {
                ID: 1,
                name: 'GST',
                type: 'Variable',
                value: 0.05,
                order: 99,
                applicable: ['all']
              },
              {
                ID: 2,
                name: 'Parcel',
                type: 'Flat',
                value: 5.00,
                order: 1,
                applicable: ['takeaway']
              }
            ],
            categories: [
              {
                ID: 1,
                name: 'Snacks',
                items: [
                  {
                    ID: 1,
                    name: 'Bread Omlette',
                    price: 18.00,
                    currency: 'INR',
                    preparation_time: '4'
                  },
                  {
                    ID: 2,
                    name: 'Samosa',
                    price: 10.00,
                    currency: 'INR',
                    preparation_time: '5'
                  }
                ],
              },
              {
                ID: 2,
                name: 'Main Course',
                items: [
                  {
                    ID: 1,
                    name: 'Veg Hakka Noodles',
                    price: 30.00,
                    currency: 'INR',
                    preparation_time: '10'
                  },
                  {
                    ID: 2,
                    name: 'Fried Rice',
                    price: 50.00,
                    currency: 'INR',
                    preparation_time: '6'
                  }
                ]
              }
            ]
          },
          {
            ID: 2,
            VendorName: 'Polar Bear',
            VendorPhone: '9741 111 533',
            VendorEmail: 'polarbear.wipro.ec4@gmail.com',
            VendorPassword: 'Pa$$w0rd',
            VendorOwner: 'Mr. Sam Mathew',
            VendorLocation: {
              campus: 'Wipro EC4',
              tower: '17',
              floor: 'First Floor'
            },
            charges: [
              {
                ID: 1,
                name: 'GST',
                type: 'Variable',
                value: 0.05,
                order: 99,
                applicable: ['all']
              },
              {
                ID: 2,
                name: 'Parcel',
                type: 'Flat',
                value: 10.00,
                order: 1,
                applicable: ['takeaway']
              }
            ],
            categories: [
              {
                ID: 1,
                name: 'Ice Creams',
                items: [
                  {
                    ID: 1,
                    name: 'Vanilla',
                    price: 30,
                    currency: 'INR',
                    preparation_time: '2'
                  },
                  {
                    ID: 2,
                    name: 'Chocolate',
                    price: 35.00,
                    currency: 'INR',
                    preparation_time: '2'
                  }
                ],
              },
              {
                ID: 2,
                name: 'Milk Shakes',
                items: [
                  {
                    ID: 1,
                    name: 'Cold Coffee',
                    price: 40.00,
                    currency: 'INR',
                    preparation_time: '5'
                  },
                  {
                    ID: 2,
                    name: 'Dry Fruit',
                    price: 50.00,
                    currency: 'INR',
                    preparation_time: '8'
                  }
                ]
              }
            ]
          }
        ];
        localStorage.setItem('FoodCourt.vendors', JSON.stringify(vendors));
      }
      // if (localStorage.getItem('FoodCourt.nextID') === null ||
      //   localStorage.getItem('FoodCourt.nextID') === undefined) {
      //   const initialID = 1001;
      //   localStorage.setItem('FoodCourt.nextID', initialID.toString());
      // }
    }
  }
  