// Question 1
// ● Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.
console.log("Question no-1")
function first10Numbers(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
}
first10Numbers();

// Question 2
// ● Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12
console.log("Question no-2")
function next5Numbers(num){
    for(i = num + 1; i <= num+5; i++){
        console.log(i);
    }
}
next5Numbers(7);

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// ○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
console.log("Question no-3")
function sumNext10(num){
    var sum = 0;
    for(i=num+1; i<=num+10; i++){
        sum+=i;
    }
    return sum;
}
console.log(sumNext10(7));

function sumNextt10(num){
    var a1 = num + 1;
    var an = num + 10
    var sum = 10/2 * (a1 + an);
    return sum;
}
console.log(sumNextt10(7));


// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the
// console.
// ○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44
console.log("Question no-4")
function printArray(arry){
    for(i=0; i<arry.length; i++){
        console.log(arry[i])
    }
}
printArray([1, "Hello", 8, 44])

// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements
// found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
console.log("Question  no-5")
function arrLength(arr){
    return arr.length;
}
console.log(arrLength([1, "Hello", 8, 44]))

// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0
console.log("Question no-6")
function sumArry(arr){
    var sum = 0;
    for (i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArry([5, 6, 99, 8, 76, 4, 68, 44]));

// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102
console.log("Question no-7")
function EvenMinusOdd(arr){
    var result = 0;
    for(i=0; i<arr.length; i++){
        result+= arr[i] % 2 == 0 ? arr[i] : -arr[i];
    }
    return result
}
console.log(EvenMinusOdd([5, 6, 99, 8, 76, 4, 68, 44]))

// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
// car
console.log("Question no-8")
function evenIndexes(arr){
    for(i=0; i<arr.length; i+=2){
        console.log(arr[i]);
    }
}
evenIndexes([5, 6, 99, 8, 76, 4, 68, 44])
evenIndexes([11, "Sam", 3, 7, "car"])

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
console.log("Question no-9")
function changeArray(arr){
    arr.pop();
    arr.push("32");
    console.log(arr)
}
changeArray([5, 6, 99, 8, 76, 4, 68, 44])

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

console.log("Qustion no-10")
function sortArray(arr){
    arr.sort(function (a, b){ return a - b})
}
var array = [5, 6, 99, 8, 76, 4, 68, 44]
sortArray(array)
console.log(array)


// Questions on JavaScript objects
// ****************************
// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

let evangadiClass = {
    lengthOfCourse: "1 Month",
    website: "https://www.evangadi.com/",
    isChallenging: false,
    topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
    students: [
        {
        name: "Abebe",
        age: 34,
        sex: "M"
        },
        {
        name: "Kebede",
        age: 44,
        sex: "M"
        },
        {
        name: "Almaz",
        age: 27,
        sex: "F"
        },
        {
        name: "Challa",
        age: 22,
        sex: "M"
        },
        {
        name: "Chaltu",
        age: 19,
        sex: "F"
        }
    ]
}

// Question 11
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// ○ // Use the dot notation "." to call the property you want to change

console.log("Question no-11")
evangadiClass.lengthOfCourse = "5 month"
console.log(evangadiClass)

// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
// ○ // Use an array method
console.log("Question no-12")
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console
console.log("Question no-13")
function averAge(arr){
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i].age;
    }
    return sum/arr.length
}
console.log(averAge(evangadiClass.students))

// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the
// percentage of male students in the class. Print the result on the console
console.log("Question no-14")
function malePercentage(arr){
    var count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i].sex == "M"){
            count++;
        }
    }
    return (count / arr.length) * 100;
}
console.log(malePercentage(evangadiClass.students))

// Question 15: Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.
console.log("Question no-15")
function div3(a, b){
    var num1 = Math.min(a, b);
    var num2 = Math.max(a, b);
    for(i = num1+1; i<num2; i++){
        var result = i % 3 == 0 ? i + " div3" : i;
        console.log(result);
    }
}
div3(1, 9);

// Question 16: The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
// three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
// numbers which are multiples of both three and five print "FizzBuzz".
console.log("Question no-16")
function fizzBuzz(){
    for(i=1; i<101; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("FizzBuzz")
        } else if(i%3 == 0){
            console.log("Fizz")
        } else if(i%5 == 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
fizzBuzz();

// Question 19: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
// number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
// integer argument is an Evens number. The function prints 0 otherwise.

function evens(num){
    while (num > 0){
        var lastDigit = num%10;
        if (lastDigit % 2 == 1){
            return 0
        }
        num = Math.floor(num / 10)
    }
    return 1
}
console.log(evens(2426))
console.log(evens(3224))
