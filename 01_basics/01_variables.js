const accountId = 134544
let accountEmail = "sarwan.30kr@gmail.com"
var accountPassword = "12344"
accountCity = "Jaipur"
let accountState;


accountEmail = "shravankr3003@gmail.com"
accountPassword = "23434"
accountCity = "Delhi"
// accountId = 2
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountId);

// Another Method to print multiple variables wihtout using console.log is console.table
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/