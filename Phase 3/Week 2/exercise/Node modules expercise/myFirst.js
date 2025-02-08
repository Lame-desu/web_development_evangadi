// console.log("my first module");

function myMultiplier(x) {
  return 2 * x;
}

var answer = myMultiplier(4);

module.exports.myMultiplier = myMultiplier;
