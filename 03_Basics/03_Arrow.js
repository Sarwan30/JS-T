const user = {
    username : "Shravan",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

function coffee(){
    let username = "Shravan"
    console.log(this.username);
    // console.log(this);
}
coffee();


// +++++++++++++++ Arrow Function ++++++++++++++++++++++

const drink = () => {
    let username = "Shrv"
    console.log(this.username);
}
drink();

// Explicit Return
const addone= (num1, num2) => {
    return num1 + num2
}
console.log(addone(2,3));


// Implicit return
const addtwo= (num1, num2) => (num1 + num2)
console.log(addtwo(2,3));


const addthree= (num1, num2) => ({username: "Shravan"})
console.log(addthree(2,3));


const myArray = [1,2,3,4,5,3];
myArray.forEach(() => ())