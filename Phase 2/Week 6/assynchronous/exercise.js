function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise

  .then(function (data) {
    console.log(data); //logs

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //returns "defeat" error
    }

    return job(true);
  })

  .then(function (data) {
    // skip
    console.log(data);
  })

  .catch(function (error) {
    console.log(error); //logs

    return job(false); //returns "job(false)"  = error
  })

  .then(function (data) {
    // skip
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error); // logs

    return "Error caught"; //return "Error caught"
  })

  .then(function (data) {
    console.log(data); //logs

    return new Error("test"); //return Error("test") object
  })

  .then(function (data) {
    console.log("Success:", data.message); //logs                         success Error: test
  })

  .catch(function (data) {
    console.log("Error:", data.message);
  });

// success
// Defeat
// error
// Error caught
// success: test
