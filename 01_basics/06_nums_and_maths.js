// const score = 400
// console.log(score);

// // To Specify a Data Strictly acc to their data Type
// const balance = new Number(100)
// // console.log(balance);
// // console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ******************* Maths **********************

const mathOperations = [
    { Operation: "Math Object", Result: "Global Math Object" },
    { Operation: "Math.abs(-4)", Result: Math.abs(-4) },
    { Operation: "Math.round(4.3)", Result: Math.round(4.3) },// Gives Value in the range bt 0-1
    { Operation: "Math.ceil(4.2)", Result: Math.ceil(4.2) },
    { Operation: "Math.floor(4.9)", Result: Math.floor(4.9) },
    { Operation: "Math.sqrt(625)", Result: Math.sqrt(625) },
    { Operation: "Math.min(5, 8)", Result: Math.min(5, 8) },
    { Operation: "Math.max(34, 46)", Result: Math.max(34, 46) },
    { Operation: "Math.random()", Result: Math.floor(Math.random()*10) + 1 } 
];

console.table(mathOperations);

const min = 10
const max = 20

 console.log(Math.floor((Math.random() * (max - min + 1))) + min)



