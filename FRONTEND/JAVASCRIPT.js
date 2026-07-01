console.log("hello")

const accountId = 12345                      //const used for constants whose values we dont want to change.
let accountEmail = "user@gmail.com"         //let is used for variables whose values we want to change. It has block scope.
var accountPassword = "54321"                //var has a problem with the scope.
accountCity = "New York"              //This is a global variable. It can be accessed anywhere in the code.
let accountState;                     //This is a variable declaration without initialization. It will have the value undefined until we assign a value to it.

//accountId = 67890            //This will give an error because accountId is a constant and we cannot change its value.
accountEmail = "updated@gmail.com"   
accountPassword = "12345"
accountCity = "Los Angeles"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])   
//This will display the values in a table format in the console. It is a better way to display multiple values.


"use strict"     // directive that enables strict mode in JavaScript. It helps to catch common coding mistakes and unsafe actions. It is recommended to use strict mode in your JavaScript code.


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


console.log("5" + 10)  //This will print "510" because the number 10 is converted to a string and concatenated with "5".
console.log("5" - 10)   //This will print -5 because the string "5" is converted to a number and then subtracted from 10.
console.log("1" + 2 + 2)   //This will print "122" because the number 2 is converted to a string and concatenated with "1", and then the next number 2 is also converted to a string and concatenated with the result.
console.log(1 + 2 + "2")   //This will print "32" because the numbers 1 and 2 are added together first to get 3, and then the result is converted to a string and concatenated with "2".

console.log(+true);       
console.log(+"");

let num1,num2,num3;
num1 = num2 = num3 = 2+2    //we can write better code so dont use this.


//**********************************************COMPARISON*********************************************** */

console.log(2 > 3)
console.log(2 >= 3)
console.log(2 == 3)
console.log(2 != 3)
console.log(2 < 3)

//problem arrises while comparing 2 different data types.
console.log("2" > 3)
console.log(2 == "2")
console.log("02" > 1)

console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined > 0)  //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

// === triple equal - will also check the data type.

console.log("2" === 2)
 

//**************************************DATA TYPES********************************************************* */

//PRIMITIVE - pass by value - copy mai changes honge actual data type mai no changes- 7 types = string , number , boolean ,null ,undefined , symbol ,big int.

const s = 10;
const scorevalue = 30.2;
const outsidetemp = null;
let useremail;
const id = Symbol('123')
const newid = Symbol('123')
console.log(id == newid)
const big = 12345678908765443323456677765545667777;

//NON-PRIMITIVE - pass by reference - 3 types = array , objects , functtions .

const heroes = ["shaktiman","naagraj","doga"]
let myobj = {
    name : "bhumi",
    age : 19,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof big);
console.log(typeof outsidetemp)   //will return object 
console.log(typeof myfunction);
console.log(typeof heroes)


//***************************************************STACK AND HEAP ************************************************* */
//STACK (primitive)
//HEAP (non-primitive)

let n = "khushi"
let n1 = n
n1 = "bhumi"
console.log(n);
console.log(n1);

let user1 = {
    email:"user@gmail.com",
    upi:"user@ybl",
}
let user2 = user1;
user2.email = "hitesh@gmail.com"

console.log(user1.email);
console.log(user2.email);



//*********************************************** STRING ******************************************************************* */
const name4 = "bhumi"
const repocount = 1
console.log(name4 + repocount + " value")
console.log('my name is ${name4} and my repo count is ${repocount}');

const gamename = new String ('hideandseek')
console.log(gamename[0])
console.log(gamename.__proto__);  
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename)
console.log(gamename.charAt(4))
console.log(gamename.indexOf('e'))

const newstring = gamename.substring(0,4)
console.log(newstring)

const anotherstring = gamename.slice(0,4)
console.log(anotherstring)

const newstring1 = gamename.substring(4,0)
console.log(newstring1)

const anotherstring1 = gamename.slice(4,0)
console.log(anotherstring1)   //slice will return empty string if start index is greater than end index.            

const p = "   hello world   ";
console.log(p)
console.log(p.trim())   //This will remove the leading and trailing whitespace from the string.
console.log(p.trimStart())   //This will remove the leading whitespace from the string.
console.log(p.trimEnd())   //This will remove the trailing whitespace from the string.  

const url = "https://www.google.com/search?q=javascript"  
console.log(url.replace('?q=javascript', ''))           
console.log(url.includes('google'))   //This will return true because the string "google" is present in the url.
console.log(url.startsWith('https'))   //This will return true because the string "https" is present at the start of the url.
console.log(url.endsWith('javascript'))   //This will return true because the string "javascript" is present at the end of the url.             


const mystring = "hello world"
console.log(mystring.split(' '))   //This will split the string into an array of substrings based on the space character. It will return ["hello", "world"].
console.log(mystring.split(''))   //This will split the string into an array of individual characters. It will return ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"].

const mystring1 = "hello-world"
console.log(mystring1.split('-'))   //This will split the string into an array of substrings based on the hyphen character. It will return ["hello", "world"].  



//***********************************************NUMBERS AND MATHS ************************************************* */

const integer = 100;
const s1 = new Number(100);
console.log(integer)
console.log(s1)
console.log(typeof integer)   //This will return "number" because integer is a primitive number.
console.log(typeof s1)   //This will return "object" because s1 is a Number object.

console.log(s1.toString().length)  
console.log(s1.toFixed(2))

const othernumber = 23.456
console.log(othernumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(2.45))
console.log(Math.ceil(4.67))
console.log(Math.floor(4.67))
console.log(Math.min(2,4,6,3,144,3))
console.log(Math.max(2,4,6,3,144,3))

console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)


//******************************************DATA AND TIME ****************************************************** */

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let d = new Date(2023, 0,23 ,5, 3)
console.log(d.toLocaleString())

let e = new Date("01-04-2007")
console.log(e.toLocaleString())



let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(e.getTime())

console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let my = new Date()
console.log(my)
console.log(my.getMonth() + 1)
console.log(my.getDay())


//***********************************************ARRAYS*************************************************************** */
const myArr = [1,2,3,4,5]
console.log(myArr[0])

const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(2,4,9,3,2,)

//Array Methods 

myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(0)
console.log(myArr)

myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))


const newArray = myArr.join()

console.log(myArr)
console.log(newArray)
console.log(typeof myArr)
console.log(typeof newArray)


//SLICE ,SPLICE 

console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)



const marvel = ["ironman","thor","spiderman","hulk","captain america"]
const dc = ["batman","superman","flash"]

marvel.push(...dc)  //This will add the elements of the dc array to the end of the marvel array. The spread operator (...) is used to spread the elements of the dc array into individual arguments for the push method.
console.log(marvel)


const combined = marvel.concat(dc)   //This will create a new array that contains the elements of both the marvel and dc arrays. The concat method does not modify the original arrays, but instead returns a new array that combines the elements of both arrays.
console.log(combined)


const myArr3 = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
console.log(myArr3.flat())   //This will flatten the myArr3 array by one level, resulting in a new array that contains all the elements of the original array, but with any nested arrays flattened into the top-level array. The flat method does not modify the original array, but instead returns a new array that is a flattened version of the original array.
console.log(myArr3.flat(2))   //This will flatten the myArr3 array by two levels, resulting in a new array that contains all the elements of the original array, but with any nested arrays flattened into the top-level array. The flat method does not modify the original array, but instead returns a new array that is a flattened version of the original array.
console.log(myArr3.flat(Infinity))   //This will flatten the myArr3 array by all levels, resulting in a new array that contains all the elements of the original array, but with any nested arrays flattened into the top-level array. The flat method does not modify the original array, but instead returns a new array that is a flattened version of the original array.


console.log(Array.isArray("hello"))   //This will return false because "hello" is a string, not an array. The Array.isArray method is used to check if a value is an array or not. It returns true if the value is an array, and false otherwise.   
console.log(Array.from("hello"))   //This will create a new array from the string "hello", resulting in an array that contains each character of the string as a separate element. The Array.from method is used to create a new array from an iterable object, such as a string or an array-like object. In this case, the string "hello" is treated as an iterable object, and each character of the string is added to the new array as a separate element.  

console.log(Array.from({name: "bhumi"}))   //this will create a new array from the object {name: "bhumi"}, resulting in an array that contains the keys of the object as separate elements. The Array.from method is used to create a new array from an iterable object, such as a string or an array-like object. In this case, the object {name: "bhumi"} is treated as an iterable object, and each key of the object is added to the new array as a separate element.  


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   //This will create a new array that contains the values of score1, score2, and score3 as separate elements. The Array.of method is used to create a new array from a variable number of arguments, and it returns a new array that contains each argument as a separate element. In this case, the values of score1, score2, and score3 are passed as arguments to the Array.of method, resulting in a new array that contains those values as separate elements.   


//***********************************************OBJECTS*************************************************************** */






















