// let arr = [1,2,3];
// // for(let val of arr){
// //     console.log(val);
// // }

// const person = {
//     name : 'Sarwan',
//     age : 21,
//     role : "Developer"
// };

// // for (let key in person){
// //     console.log(person[key]);
    
// // }

// arr.forEach(function(item){
//     console.log(item);
// })

// Object.values(person).forEach(value => {
//     console.log(value);
    
// })



console.log('Before setTimeout');

setTimeout(()=> {
    console.log('Inside setTimeOut');
}, 2000);

console.log('After setTimeout');

