
// Return Function
function addNumber(a,b) {
    return a+ b;
}

console.log(addNumber(5,6))

// Assign Function To Varible
var printMe = function () {
    console.log("My name is Guy.js")
}

printMe();

//Call to ThisCode (function printMe) in 5 sec
setTimeout(printMe,5000);