function hasConsecutiveDuplicateNumbers(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (!isNaN(str[i]) && str[i] === str[i + 1]) {
            return true;
        }
    }
    return false;
}

let str1 = '112'; 
let str2 = '121'; 
let str3 = 'pass12word2'; 
let str4 = 'pass122';     

console.log(hasConsecutiveDuplicateNumbers(str1)); 
console.log(hasConsecutiveDuplicateNumbers(str2)); 
console.log(hasConsecutiveDuplicateNumbers(str3)); 
console.log(hasConsecutiveDuplicateNumbers(str4)); 

