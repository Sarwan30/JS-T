function sayMyname() {
    for (let index = 0; index < 5; index++) {
        // console.log("Hello Shravan");
    }
}
sayMyname // This is the reference of the function
sayMyname(); // This is the execution of the function

function addTwoNum(num1, num2) {
    // console.log(num1 + num2);
    return num1+num2 // this is the right way
}

const result = addTwoNum(3,5) // In this Case result will not store the added value becoz we dont use return in the function
// console.log("Result: ", result);

function loginUserMessage(username) {
    if (username === undefined) { // another method or alternative of (username === undefined) is (!username)
        console.log("Please enter your Username");
        return
    }
    return `${username} just loggedIn. `
}

// console.log(loginUserMessage("Sarwan3003"));
console.log(loginUserMessage());// Gives undefined in result



// If you want to add multiple num of parameter u can use ... (rest operator)
function calculateCartPrice(...num) {
    return num
}

console.log(calculateCartPrice(200,500,1584,141,3061,1456));

const user = {
    username: "Sarwan",
    price: 124
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
       
}

handleObject(user);
handleObject({
    username: "Kunal",
    price: 399
})

const myNewArray = [100, 200, 300, 400]
function returnSecondVal(getArray) {
    return getArray[1]
}
console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([100, 300, 500, 700]));
