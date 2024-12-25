// Java Script is a dynamically typed Language coz type check is perform at runtime.
// Call by value & Call by reference
// Datatypes in JavaScript
/*
1). Primitive Data Types: Whenever you call a primitive datatype in a function it gives you a copy of the value not its reference. And if you made changes in that, that changes would only reflect in th copy of that not in the orginial one.
    7 types : String, Number, Boolean, null, undefined, Symbol(use to make a value unique), BigInt.
*/
const score = "100" // String
const scoreValue = 200.3 // Number
const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail; //Undefined
const id = Symbol('123') // Symbol
const anotherId = Symbol('123')
const bigNumber = 254324236465753245224542n // BigInt
console.log(id === anotherId);

/*
2). Non-Primitve (Reference Type): 
    Types: Array, Objects, Functions.

    */
   const heros = ["Iron Man" , "Cap Am", "Scarlet johnson"] // Arrays

   let Obj = {
    name : "Shravan",
    roll : 232,
    Branch : "btech"
   } // Object


// We can treat Function as Variable in JavaScript
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // Output = bigint
console.log(typeof outsideTemp); // Output = Object
console.log(typeof myFunction); // Output = Function


// https://262.ecma-international.org/5.1/#sec-11.4.3

// *********************** Memory *********************************
// Stack(Primitive)
// Example:
let myName =  "Shravan"
let anotherName = myName
anotherName = "Hritik"
console.log(myName);
console.log(anotherName);


// Heap(Non-Primitive)
// Example:
let user = {
    email: "sarwan.30kr@gmail.com",
    upi : "90234@ybl" 
}

let user2 = user

user2.email = "umesh@gmail.com"
console.log(user.email);
console.log(user2.email);