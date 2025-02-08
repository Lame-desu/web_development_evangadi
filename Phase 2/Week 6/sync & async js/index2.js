let fruit = "strawberry";
let liquid = "water";
let holder = "cone";
let topping = "chocolate";

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(fruit_name + "was selected");
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(liquid + "Added");
        setTimeout(() => {
          console.log("start the machine");
          setTimeout(() => {
            console.log("Ice cream placed on" + holder);
            setTimeout(() => {
              console.log(topping + "as toppings");
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
};

order(fruit, production);
