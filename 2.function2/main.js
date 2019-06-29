function palindrome(message){
    // wirte your code here
    var arr=message.split("")
    for(i=0;i<arr.length/2;i++){
        if(arr[i]!=arr[arr.length-i-1])
            return console.log("false");
    }
    return console.log("true");
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
