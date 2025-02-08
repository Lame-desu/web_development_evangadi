// EVANGADI EXAMPLES

// console.log(fetch("https://randomuser.me/api"));

fetch("https://randomuser.me/api").then((result) => {
  console.log(result);
});

// fetch("https://randomuser.me/api").then((result) => {
//   console.log(result.json());
// });

// fetch("https://randomuser.me/api")
//   .then((result) => {
//     return result.json();
//   })
//   .then((res) => {
//     console.log(res.results[0]);
//   })s
//   .catch((error) => {
//     console.log(error);
//   });

// async function logData() {
//   try {
//     let response = await fetch("https://randomuser.me/api");
//     let data = await response.json();
//     const user = data.results[0];
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }

// const myFirstPromise = new Promise((resolve, reject) => {
//   const condition = true;

//   if (condition) {
//     resolve("here is the data from the youtube");
//   } else {
//     reject("sorry, couldn't get data");
//   }
// });

// console.log(myFirstPromise);

// myFirstPromise
//   .then((data) => console.log("data >>>", data))
//   .catch((err) => console.log("Error >>>", err));
