const name = "SHRAVAN"
const repoCount = 50

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shrv-game');
console.log(gameName[0]);
console.log(gameName.charAt(0)); // 
console.log(gameName.indexOf('s'));
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

// IMP

const newString = gameName.substring(0, 4) // output = shrv, if you give negative values in substring it wont take it, it ignores the negative value and start from the 0
console.log(newString);

const anotherString = gameName.slice(-6, 4) // you can give negative values in slice, 
console.log(anotherString);

const newString1 = "   Shravan    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://cvv.com/videography%10booking"
console.log(url.replace('%10', 'shrv'))
console.log(url.includes('%10'));

console.log(gameName.split('-'));



