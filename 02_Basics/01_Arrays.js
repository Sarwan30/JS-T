// it is call by reference means if u change in the array that change will reflect in the original one.
// Key Features of JavaScript Arrays:
// Ordered Collection: Elements are stored in a specific order, with each element having an index starting from 0.
// Dynamic Size: Arrays can grow or shrink dynamically, meaning you don't need to define their size beforehand.
// Heterogeneous Data: Arrays can hold elements of different types (e.g., numbers, strings, objects).
// Built-in Methods: JavaScript provides many methods to manipulate arrays, such as adding, removing, and searching elements.

//  Methods for declaring Arrays 
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[1]);

const myArr1 = new Array(1, 2, 3, "Shrvn")
console.log(myArr1);

// ++++++++++++++++++++++++++ Methods in Arrays +++++++++++++++++++++++

// Push
myArr.push(6)
console.log(myArr)

// Pop
myArr.pop()
console.log(myArr);

// Unshift, Not an efficient method for adding a value into the array coz it add the value at start of the array
myArr.unshift(9)
console.log(myArr);

// Shift, Remove the first element from the array
myArr.shift()
console.log(myArr);

// Includes : Tell about the presence and absence of thez element in the array 
console.log(myArr.includes(9));

// indexOf , gives index , if an element is not present in the array then it will gives output as -1
console.log(myArr.indexOf('Shrv'));

// Join : Bind and Convert the array in the String
const newArr = myArr.join()
console.log(typeof newArr);

// Slice & Splice
console.log("A " , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log(myArr);
