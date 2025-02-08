var abebe = require("./myFirst");
var almaz = require("./mySecond");

console.log(abebe);
console.log(almaz);

console.log(abebe.myMultiplier(5));
console.log(almaz.myMultiplier(5));

var result = abebe.myMultiplier(14);

var fs = require("fs");

fs.writeFileSync(
  "results.txt",
  "The value of 14 when passed through the myMultiplier function is ( ). " +
    result
);

var result2 = almaz.myMultiplier(14);

fs.appendFileSync(
  "results.txt",
  "\nThe value of 14 when passed through the myMultiplier function is ( ) " +
    result2
);
