// WHAT IS CALLBACK
// function SearchData(callback) {
//   setTimeout(() => {
//     var data = "data is ready";
//     callback(data);
//   }, 2000);
// }

// function printData(data) {
//   console.log(data);
// }

// EXPLAIN ALL
// place Order (2);
// cut fruits (2);
// add water (1)
// start machine(1)
// serve ice (2)

// liquid = "Water";

// let order = (call_production) => {
//   setTimeout(() => {
//     console.log("order placed. please call production");
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("Fruit has been chopped");
//       setTimeout(() => {
//         console.log(liquid + "added");
//         setTimeout(() => {
//           console.log("machine has started");
//           setTimeout(() => {
//             console.log("serve ICE cream");
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

order(production);

// USING PROMISE
// liquid = "Water";
// let order2 = (time, work) => {
//   return new Promise((resolve, reject) => {
//     var is_shop_open = false;

//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// order2(2000, () => console.log("order placed. please call production"))
//   // step 2
//   .then(() => {
//     return order2(0, () => console.log("production has started"));
//   })
//   // step 3
//   .then(() => {
//     return order2(2000, () => console.log("Fruit has been chopped"));
//   })
//   // step 4
//   .then(() => {
//     return order2(1000, () => console.log(liquid + "added"));
//   })
//   // step 5
//   .then(() => {
//     return order2(1000, () => console.log("machine has started"));
//   })

//   // Step 6
//   .then(() => {
//     return order2(2000, () => console.log("Serve Ice Cream"));
//   })

//   .catch(() => {
//     console.log("Customer left");
//   })
//   .finally(() => {
//     console.log("this will be printed in either case");
//   });

//ASYNC AWAIT
// async function order3() {
//   console.log("A");
//   console.log("B");
//   await order2(2000, () => console.log("Fruit has been chopped"));
//   console.log("C");
// }
// order3();

//the above code
// async function order3() {
//   try {
//     await order2(2000, () =>
//       console.log("order placed. please call production")
//     );
//     await order2(0, () => console.log("production has started"));
//     await order2(2000, () => console.log("Fruit has been chopped"));
//     await order2(1000, () => console.log(liquid + "added"));
//     await order2(1000, () => console.log("machine has started"));
//     await order2(2000, () => console.log("Serve Ice Cream"));
//   } catch (error) {
//     console.log("customer left");
//   }
// }

// order3();

Settimeout(() => {
  console.log("arrow function");
}, 1000);
