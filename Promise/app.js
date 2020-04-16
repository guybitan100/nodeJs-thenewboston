"use strict";
// What is a JavaScript Promise?
// 1. An Object with Properties and Methods
// 2. Represents the Eventual Completion (or Failure) of the Asynchronous Operation
// 3. Provides a Resulting Value
//------------------------------------------------------
// You need to pass a callback function the purpose of that:
// 1. The setup what the promise is going to do?
// 2. Define when resolved and when reject are called
// This callback function it going to have 2 parameters (Resolved,Reject)
// 1. function that will be called when the promises resolved
// 2. function that will be called when the promises rejected

let a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject("Done");
        //resolve("Done");
    }, 4000)
});

a.then(function (val) {
    console.log("Resolve: " + val);
}, function (val) {
    console.log("Rejected: " + val);
});
