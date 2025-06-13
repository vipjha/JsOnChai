const accountId = 1234567890
let acoountEmail = "jhavip@gmail.com"
var accountPassword = "1234567890"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // Not allowed, as accountId is a constant
acoountEmail = "ss@ssda.com"
accountPassword = "4235" // accountPassword = 2
accountCity = "Delhi"

/*
 preffered  not to use var
 - because of isse in block scope and functionl scope
 - var is function scoped
 - let is block scoped
 - const is block scoped and cannot be reassigned
*/

console.log(accountId);

console.table([accountId, acoountEmail, accountPassword, accountCity,accountState]);
 //console.log(accountId, acoountEmail, accountPassword, accountCity);