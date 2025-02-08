let fruit = "strawberry";
let liquid = "water";
let holder = "cone";
let topping = "chocolate";

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        // work is 👇 getting done here
        resolve(work());

        // Setting 👇 time here for 1 work
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

// step 1
order(2000, () => console.log(fruit + "was selected"))
  // step 2
  .then(() => {
    return order(1000, () => console.log("production has started"));
  })

  // step 3
  .then(() => {
    return order(2000, () => console.log("Fruit has been chopped"));
  })

  // step 4
  .then(() => {
    return order(1000, () => console.log(liquid + "added"));
  })

  // step 5
  .then(() => {
    return order(1000, () => console.log("start the machine"));
  })

  // step 6
  .then(() => {
    return order(2000, () => console.log("ice cream placed on" + holder));
  })

  // step 7
  .then(() => {
    return order(3000, () => console.log(topping + "as toppings"));
  })

  // Step 8
  .then(() => {
    return order(2000, () => console.log("Serve Ice Cream"));
  });
