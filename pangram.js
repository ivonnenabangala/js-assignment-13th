function pangram(str){

    str = str.toLowerCase()
    
    const set = new Set()
    
    for(let character of str){
        if(character>="a" && character<="z"){
            
            set.add(character)
        }
    }
    if(set.size === 26){
        return true
    } else {
        return 4
    }
}

let str = "The quick brown fox jumps over the lazy dogs"
console.log(pangram(str));

