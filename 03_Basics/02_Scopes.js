

// if (true) {
//     let a = 1
//     const b = 2
//     var c = 3
// }

 

// console.log(a);
// console.log(b);
// console.log(c);


// *********************** Nested Scope ***********************

function one() {
    const username = "Sarwan"
    function two() {
        const website = "Youtube"
        console.log(username)
    } 
    // console.log(website);
    
    two();
}

// one();


if (true) {
    const username = "Shravan"
    if (username === "Shravan") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++


//  This will Work because there is no expression is declared to define it
console.log(addone(5));
function addone(num) {
    return num + 1;
}



// This will not work coz we store the function or declare the function a reference, because of that log cannot be able to access the addTwo function
console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2;   
}