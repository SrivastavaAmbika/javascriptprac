let userEmail = 'abc123a'
let password ='sddff'
let userChecker = function(myString){
if ((myString.includes(123)) && (myString.length >6)) {
    return true
} 
    return false
}

// console.log(userChecker(userEmail));

let passChecker = function(pass){
    if ((pass.includes('1234')) && (pass.length > 8)) {
        return true
    }  
    return false
        
    }

console.log(passChecker(password));
