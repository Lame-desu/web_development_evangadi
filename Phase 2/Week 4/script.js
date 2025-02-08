// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function printEvens(arr){
    var result = [];
    for(var i = 0; i<arr.length; i+=2){
        if(arr[i]%2 == 0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(printEvens([1, 2, 3, 6, 4, 8]));
console.log(printEvens([0, 1, 2, 3, 4]));

// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

function reverseCompare(num){
    if(isNaN(num)){
        console.log("Invalid input");
        return;
    }
    result = "";
    var tempo = num;
    while(num > 0){
        var lastDigit = num % 10;
        result+=lastDigit;
        num = Math.floor(num/10)
    }
    result = parseInt(result);
    console.log(tempo);
    console.log(result);
    if(tempo > result){
        console.log("Ok")
    } else {
        console.log("Not ok")
    }
}

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function factorial(num){
    if(num<0 || isNaN(num)){
        return "invalid input"
    } else if (num==0 || num==1){
        return 1
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(0))

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

function checkMeera(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i] == 2*arr[j]){
                return "I am NOT a Meera array"
            }
        }
    }
    return "I am a Meera array"
}
console.log(checkMeera([10, 4, 0, 5]));
console.log(checkMeera([7, 4, 9]));
console.log(checkMeera([1, -6, 4, -3]));

// function checkMeera2(arr){
//     const addToSet = new Set();
//     for(var i of arr){
//         addToSet.add(i);
//     }
//     for(var i of arr){
//         if(addToSet.has(i*2)){
//             return "I am NOT a Meera array"
//         }
//     }
//     return "I am a Meera array";
// }
// console.log(checkMeera([10, 4, 0, 5]));
// console.log(checkMeera([7, 4, 9]));
// console.log(checkMeera([1, -6, 4, -3]));

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

function isDual(arr){
    for(var i = 0; i<arr.length; i++){
        var count = 0;
        for(var j = 0; j<arr.length; j++){
            if(arr[i] == arr[j]){
                count++
            }
        }
        if(count!=2){
            return 0
        }
    }
    return 1;
}
console.log(isDual([1, 2, 1, 3, 3, 2]))
console.log(isDual([2, 5, 2, 5, 5]))
console.log(isDual([3, 1, 1, 2, 2]))

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

function digitalClock(time){
    let timeInMin = time % 3600;
    let timeInHour = Math.floor(time/3600) % 24;
    let timeInSec = timeInMin % 60;
    timeInMin = Math.floor(timeInMin/60);

    timeInHour = timeInHour < 10 ? "0" + timeInHour : timeInHour;
    timeInMin = timeInMin < 10 ? "0" + timeInMin : timeInMin;
    timeInSec = timeInSec < 10 ? "0" + timeInSec : timeInSec;

    var result = timeInHour + ":" + timeInMin + ":" + timeInSec;
    return result;
}
console.log(digitalClock(61201))
console.log(digitalClock(87000))
console.log(digitalClock(1000000))






































// Create a simple library management program in JavaScript that allows users to: 

// • View a list of available books.
// • Borrow a book. 
// • Return a book.
// • Exit the program.


// Simple Book class
class Book {                            
    constructor(title) {
        this.title = title;
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed "${this.title}".`);
        } else {
            console.log(`"${this.title}" is already borrowed.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`You returned "${this.title}".`);
        } else {
            console.log(`"${this.title}" was not borrowed.`);
        }
    }
}

// Simple book collection
const library = [
    new Book('Biology'),
    new Book('Chemistry'),
    new Book('fikir iske mekabir')
];

// Function to display books
function displayBooks() {
    console.log("Available books:");
    library.forEach((book, index) => {
        if (book.isAvailable) {
            console.log(`${index + 1}. ${book.title}`);
        }
    });
}

// Main program loop
function main() {
    // const prompt = require('prompt-sync')(); // Using prompt-sync for Node.js

    while (true) {
        console.log("\n1. View available books");
        console.log("2. Borrow a book");
        console.log("3. Return a book");
        console.log("4. Exit");
        
        const choice = prompt("Enter your choice: ");

        if (choice === '1') {
            displayBooks();
        } else if (choice === '2') {
            displayBooks();
            const bookIndex = parseInt(prompt("Enter the number of the book to borrow: ")) - 1;
            if (library[bookIndex]) {
                library[bookIndex].borrow();
            } else {
                console.log("Invalid book number.");
            }
        } else if (choice === '3') {
            displayBooks();
            const bookIndex = parseInt(prompt("Enter the number of the book to return: ")) - 1;
            if (library[bookIndex]) {
                library[bookIndex].returnBook();
            } else {
                console.log("Invalid book number.");
            }
        } else if (choice === '4') {
            console.log("Exiting the program.");
            break;
        } else {
            console.log("Invalid choice, please try again.");
        }
    }
}

// Start the program
main();
