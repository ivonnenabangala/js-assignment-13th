function hasDuplicates(str){
    let password = str.split('')
    let i, j;
    for(i = 0; i < password.length; i++){
        for( j = 1; j < password.length; j++){
            console.log(password[j]);
            
        }
        if(password[i] != password[j]){
            console.log(password[i]);
            console.log('j', password[j]);
            return false
        } else {
            // console.log(false);
            
            return true
        }
        
        
    }
}
let str = '111s'
let result = hasDuplicates(str)
console.log(result);
