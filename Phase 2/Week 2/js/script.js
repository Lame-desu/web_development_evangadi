// Question 1
var myFirst = () => {
    console.log("Hello!")
}
myFirst();

// Question 2
var mySecond = (n) => n;
console.log(mySecond("Lamesgin"));

// Question 3
var myThird = (n) => mySecond(n);
console.log(myThird("Tinsu"));

// Question 4
function myFourth(n) {
    if (Array.isArray(n) == false) {
        console.log("Enter array.");
    } else if (n.length == 0) {
        console.log("Empty array!")
    } else {
        console.log(n[0]);
    }
}
console.log(myFourth([8, 7]));
// Question 5
function myFifth(n){
    if (Array.isArray(n) == false || n.length == 0){
       return "Invalid input!"
    } else if (n.length == 1){
       return n[0];
    } else {
       return n[0] + myFifth(n.slice(1));
    }
 }
console.log(myFifth([4, 5]))
//  Question 6
var minToSec = (x) =>  x * 60;
console.log(minToSec(2));

//Question 7
var numIncr = (x) =>  ++x;
console.log(numIncr(5));

//Questioin 8
var TriangleArea = (base, height) => 0.5 * base* height;
console.log(TriangleArea(3, 4));

//Question 9
var totallNoOfLegs = (chickens, cows, pigs) => (chickens * 2) + (cows * 4) + (pigs * 4);
console.log(totallNoOfLegs(2,1,1));

//Question 10
function threeTimes(n){
    if(Array.isArray(n) == false || n.length != 2){
        return "Invalid input"
    } else {
        return 3 * n[0];
    }
}
console.log(threeTimes([5, 6]));

//Question 11
function areEqual(x, y){
    return x==y;
}
console.log(areEqual(4, 5));
//Question 12
function isDivisible(n){
    return n%100 == 0;
}
console.log(isDivisible(701));

//Question 13
function EvenOdd(n){
    if (n%2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(EvenOdd(5));

//Question 14
function grade(x){
    if(x > 100 || x < 0){
        console.log("Invalid Score")
    } else if( x >= 90){
        console.log("Grade A")
    } else if(x >= 80){
        console.log("Grade B")
    } else {
        console.log("Grade C")
    }
}
grade(79);