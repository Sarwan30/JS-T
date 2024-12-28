// There are two ways to declare and object
// 1st: Literal 
// 2nd: Constructor 

// singleton
Object.create

// Object Literals
const mySym = Symbol("1234")
const js_user = {
    name: "Shravan",
    "fullname": "Shravan Kumar",
    [mySym]: "myKey1", // to implement Symbol in an object
    rollno: 2416,
    branch: "CSE, B.Tech"  ,
    location: "Delhi",
    email: "sarwan.32@gmail.com",
    isloggedIn: false,
    lastLoggedIn: ["Monday", "Wednesday", "Friday"],
    personal:{
        Address: "A-2/444",
        Contact: 98146521634
    }
};

// Method to Access Elements of Objects

console.log(js_user);
console.log(js_user.personal.Contact);
console.log(js_user.lastLoggedIn);

console.log(js_user["isloggedIn"]);
console.log(js_user.fullname);
console.log(js_user["fullname"]);
console.log(js_user[mySym]);


// Manipulate data in Objects
js_user.personal.Contact = 98774456661
console.log(js_user);

// Lock Values, How to make a value permanent by using Freeze
Object.freeze(js_user.personal)
js_user.personal.Contact = 9877445666
console.log(js_user);

js_user.greeting = function(){
    console.log(`Hello, ${this.fullname}!`);
}

console.log(js_user.greeting());