// const tinderUser = new Object({
//     name: "Shravan"
// }) //This is a Singleton Object

const tinderUser = {
    name: "Shravan"
} // This is a non Singleton Object

tinderUser.userId = 1;
tinderUser.userName = "Sarwan3003"
console.log(tinderUser);

const regularUser = {
    email: "sarwan@payworldindia.com",
    fullname: {
        userfullname:{
            firstname: "Shravan",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}
const obj = {
    7: "g",
    8: "h",
    9: "i"
}

// Not a Good Way
const obj3 = {obj1, obj2} // Output: {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '4': 'd', '5': 'e', '6': 'f' }
//   }
console.log(obj3);

// Methods of Concatinating Multiple Objects 

// Object.Assign: To concat two arrays
const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

// Object.Assign: for concatinating more than 2 arrays 
const obj5 = Object.assign({}, obj1,obj2,obj) // Object.assign(target, source)
console.log(obj5);


// Spread Operator, For joining Multiple Objects. //Best Way
const obj6 = {...obj1,...obj2}
console.log(obj6);

const users = [
    {
        id: 1,
        email: "sarwan@gmail.com",
        userName: "sarwan123"
    },
    {
        id: 2,
        email: "Kunal@gmail.com",
        userName: "Kunal123"
    }
]
console.log(tinderUser);
console.log(users[1].email);

// Extracting Keys from an Object
console.log(Object.keys(tinderUser));

// Extracting Values from an Object
console.log(Object.values(tinderUser));

// Creating Array from the set of every KEy and value pair 
console.log(Object.entries(tinderUser));

// Checking the key if it present in the object or not
console.log(tinderUser.hasOwnProperty('islogged'));

// ++++++++++++++++++++++++++++++ De Structuring of Objects ++++++++++++++++

const course = {
    courseName: "JS",
    price: 694,
    courseInstructor: "Sarwan"
}

// course.courseInstructor

//Creating an Shortcut for calling an value of a object
const {courseInstructor: isntructor} = course
console.log(isntructor);


// +++++++++++++++++++++++ API's +++++++++++++++++++++++

// {
//     "name": "Shrv",
//     "courseName": "JS",
//     "price": 0
// }