// Questioin 1
console.log("Answer for question 1")
console.log(24 > 3); //true
console.log(2 < "12"); //true
console.log(0 == 2); //false
console.log(2.00 == 2); //true
console.log(2.0 == "2"); //true
console.log(2 < "jhon"); //false
console.log(2 > "jhon"); //false
console.log("2" < "2"); //false
console.log("2" > "12");  //true true based on charcode
console.log(1 == 1 || 3 == 2 || 3 == 7); //true
console.log(1 == 1 && 2 == 2 && 3 == 7); //false
console.log(1 == 1 || 2 == 2 && 3 == 7); //true based on precedence of && operator
console.log(1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")); //true


// Question 2
console.log("\n\nAnswer for question 2")
console.log("\nAnswers for question 1"); // answer D
console.log('1' === 1);
console.log(1 == 1);
console.log(1 === 1);

console.log("\nAnswers for question 2"); // answer B (true)
let x = (1 == true);
console.log(x);

console.log("\nAnswers for question 3"); // answer D (true)
let xx = 10;
let y = (xx > 5) && (xx < 15);
console.log(y);

console.log("\nAnswers for question 4"); // answer B (8)
let xxx = 5;
xxx += 3;
console.log(xxx);

console.log("\nAnswers for question 5"); // answer A (10)
let xxxx = 10;
let yy = xxxx++;
console.log(yy);

console.log("\nAnswers for question 6"); // answer D (True)
let x2 = 1;
let y2 = (x2 !== 2);
console.log(y2);

console.log("\nAnswers for question 7"); // answer 4 (because of the unary opperator +)
console.log( (+"2"+2));

console.log("\nAnswers for question 8"); // answer 1
console.log(7 % 3);

console.log("\nAnswers for question 9"); // answer 3 (true converted to 1 and false converted to 0)
console.log(2+true);


//Question 3
console.log("\n\nAnswer for question 3")
let a = 1;
let b = 2;
let c = a + b;
console.log(c);


//Question 4
console.log("\n\nAnswer for Question 4");
let first_name;
let last_name;
let full_name;
first_name = "Lamesgin";
last_name = "Desalegn";
full_name = first_name + " " + last_name;
console.log(full_name);









