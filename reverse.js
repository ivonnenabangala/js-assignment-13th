function reverseString(str){
    string = str.split("")
    let reversedString = string.reverse()
    let newString = reversedString.join("")
    console.log(newString)
    return newString
}
reverseString("Hello")


