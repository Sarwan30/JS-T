const marvel = ["Thor", "Iron man", "spidee", "Thanos"]
const dc = ["Batman", "Superman", "Flash"]

// Push on Arrays
// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[4]);
// console.log(marvel[4][2]);


// Concat on Arrays
const allHeros = marvel.concat(dc);
console.log(allHeros);


// Spread Operator, For joining Multiple Arrays 
const all_new_heros = [...marvel,...dc]
console.log(all_new_heros);

// Flat: to extract a single array from a set of subarray
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

// .isArray: To check the object is array or not
console.log(Array.isArray("Shrv"));

// .from: To convert any type of data into an array
console.log(Array.from("Shrv"));

// Use from in the Object Datatype it will return nothing becoz it will cannot able to convert an object into the array.
console.log(Array.from({name: "Shravan"})); // Interesting/Important


//.of : Convert Multiple Variables in a set of array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

