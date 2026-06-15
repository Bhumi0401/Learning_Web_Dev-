console.log("hello")

const accountId = 12345                      //const used for constants whose values we dont want to change.
let  accountEmail = "user@gmail.com"         //let is used for variables whose values we want to change. It has block scope.
var accountPassword = "54321"                //var has a problem with the scope.
accountCity = "New York"              //This is a global variable. It can be accessed anywhere in the code.
let accountState;                     //This is a variable declaration without initialization. It will have the value undefined until we assign a value to it.

//accountId = 67890            //This will give an error because accountId is a constant and we cannot change its value.
accountEmail = "updated@gmail.com"   
accountPassword = "12345"
accountCity = "Los Angeles"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])   
//This will display the values in a table format in the console. It is a better way to display multiple values.


"use strict"   // directive that enables strict mode in JavaScript. It helps to catch common coding mistakes and unsafe actions. It is recommended to use strict mode in your JavaScript code.


//alert("hi")    //not work,we r using node.js environment. alert is a browser-specific function and is not available in Node.js. If you want to display a message in the console, you can use console.log instead.



//DATATYPES
let name = "John Doe"          //String
let age = 30                   //Number - 2 to the power 53
let isStudent = true           //Boolean
let hobbies = ["reading", "sports", "music"]   //Array
let address = {                //Object
    street: "123 Main St",
    city: "New York",
    state: "NY"
}
let nullValue = null           //Null
let undefinedValue;            //Undefined

console.table([name, age, isStudent, hobbies, address, nullValue, undefinedValue])      

//symbol and bigint are also data types in JavaScript, but they are less commonly used. Symbol is a unique and immutable primitive value that can be used as a key for object properties. BigInt is a numeric data type that can represent integers with arbitrary precision, which means it can handle numbers larger than 2^53 - 1.

console.log(typeof "street");

console.log(typeof null); //This is a known quirk in JavaScript. The typeof operator returns "object" for null, which is incorrect. This is because null was originally intended to be an object reference, but it was later changed to be a primitive value. However, the typeof operator was not updated to reflect this change, so it still returns "object" for null.




//CONVERSION

let score = "100abc"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)   //This will convert the string "100abc" to the NaN (NOT A number) .
console.log(typeof valueInNumber)   //will return number
console.log(valueInNumber)   //This will print NaN because "100abc" cannot be converted to a valid number.


//**********************************************OPERATIONS*********************************************** */
let a = 10
let negativea = -a
console.log(negativea)

console.log(10+2)  //Addition
console.log(10-2)  //Subtraction
console.log(10*2)  //Multiplication
console.log(10/2)  //Division
console.log(10%3)  //Modulus (remainder)
console.log(10**2) //Exponentiation (10 raised to the power of 2)

let x = 5
x += 3   //This is equivalent to x = x + 3
console.log(x)   //This will print 8

x -= 2   //This is equivalent to x = x - 2
console.log(x)   //This will print 6


let str1 = "Hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3)  


console.log("5" + 10)   //This will print "510" because the number 10 is converted to a string and concatenated with "5".
console.log("5" - 10)   //This will print -5 because the string "5" is converted to a number and then subtracted from 10.
console.log("1" + 2 + 2)   //This will print "122" because the number 2 is converted to a string and concatenated with "1", and then the next number 2 is also converted to a string and concatenated with the result.


