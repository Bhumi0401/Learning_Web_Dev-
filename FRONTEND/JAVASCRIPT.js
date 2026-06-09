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


