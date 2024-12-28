let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0, 23) // Months are Started from 0 in JavaScript.
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2002")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday: "narrow",
    timeZone: 'UTA'
})