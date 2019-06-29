function reverseString(message){
    var arr1=message.split("")
    var arr2=[]
    while (arr1.length!=0){
        arr2.push(arr1.pop())
    }
    console.log(arr2.join(""))
}
reverseString('hello'); // should return 'olleh'
