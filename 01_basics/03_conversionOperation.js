let score = "33"
let valueInNumber = Number(score)


let score1 = "33aabc"
let valueInNumber1 = Number(score1)

let score2 = null
let valueInNumber2 = Number(score2)

let score3 = undefined
let valueInNumber3 = Number(score3)


let score4 = true
let valueInNumber4 = Number(score4)

let score5 = "Hitesh"
let valueInNumber5 = Number(score5)


const data = [
    {Variable: 'score', Type: typeof score, Value: score },
    { Variable: 'valueInNumber', Type: typeof valueInNumber, Value: valueInNumber},
    { Variable: 'score1', Type: typeof score1, Value: score1 },
    { Variable: 'valueInNumber1', Type: typeof valueInNumber1, Value: valueInNumber1 },
    { Variable: 'score2', Type: typeof score2, Value: score2 },
    { Variable: 'valueInNumber2', Type: typeof valueInNumber2, Value: valueInNumber2 },
    { Variable: 'score3', Type: typeof score3, Value: score3 },
    { Variable: 'valueInNumber3', Type: typeof valueInNumber3, Value: valueInNumber3 },
    { Variable: 'score4', Type: typeof score4, Value: score4 },
    { Variable: 'valueInNumber4', Type: typeof valueInNumber4, Value: valueInNumber4 },
    { Variable: 'score5', Type: typeof score5, Value: score5 },
    { Variable: 'valueInNumber5', Type: typeof valueInNumber5, Value: valueInNumber5 }
  ];
  
  console.table(data);
  
  


/*
"33" => 33
"33abc" => NaN
false => 0, true => 1
"Shravan" => NaN
Undefined => NaN 
null => 0
*/

//Conversion of Int to boolean
let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)

let isloggedIn1 = 0
let booleanIsLoggedIn1 = Boolean(isloggedIn1)

let isloggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isloggedIn2)

let isloggedIn3 = "Hitesh"
let booleanIsLoggedIn3 = Boolean(isloggedIn3)

let isloggedIn4 = null
let booleanIsLoggedIn4 = Boolean(isloggedIn4)

let isloggedIn5 = undefined
let booleanIsLoggedIn5 = Boolean(isloggedIn5)

const data1 = [
    {Variable: 'isloggedIn', Type: typeof isloggedIn, Value: isloggedIn },
    { Variable: 'booleanIsLoggedIn', Type: typeof booleanIsLoggedIn, Value: booleanIsLoggedIn},
    {Variable: 'isloggedIn1', Type: typeof isloggedIn1, Value: isloggedIn1 },
    { Variable: 'booleanIsLoggedIn1', Type: typeof booleanIsLoggedIn1, Value: booleanIsLoggedIn1},
    {Variable: 'isloggedIn2', Type: typeof isloggedIn2, Value: isloggedIn2 },
    { Variable: 'booleanIsLoggedIn2', Type: typeof booleanIsLoggedIn2, Value: booleanIsLoggedIn2},
    {Variable: 'isloggedIn3', Type: typeof isloggedIn3, Value: isloggedIn3 },
    { Variable: 'booleanIsLoggedIn3', Type: typeof booleanIsLoggedIn3, Value: booleanIsLoggedIn3},
    {Variable: 'isloggedIn4', Type: typeof isloggedIn4, Value: isloggedIn4 },
    { Variable: 'booleanIsLoggedIn4', Type: typeof booleanIsLoggedIn4, Value: booleanIsLoggedIn4},
    {Variable: 'isloggedIn5', Type: typeof isloggedIn5, Value: isloggedIn5 },
    { Variable: 'booleanIsLoggedIn5', Type: typeof booleanIsLoggedIn5, Value: booleanIsLoggedIn5}
  ];

  console.table(data1);

  /*
  1 => true
  0 => false
  "" => false
  "Shravan" => true
  null => false
  undefined => false
  */

  //Conversion of String
  let someNumber = 33
  let stringNumber = String(someNumber)
  console.log(stringNumber)
  console.log(typeof stringNumber)

  /*  ***********************Operations********************* */


  let value = 3
  let negvalue = -value
//   console.log(negvalue)

//Basic Math Operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // for 2 raise to power 2
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = "Shravan"

let str3 = str1 + str2
// console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3+4) * 5 % 3);

// console.log(+true) // gives output as 1
// console.log(true+) // throw an error
console.log(+"") // gives 0
console.log(-false) //gives -0
console.log(+false)

// Prefix and Postfix operator