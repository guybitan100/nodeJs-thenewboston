
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky");
        console.log(this === Bucky); // this = Object
    }
};

Bucky.printFirstName();

//This function didn't belong to any object so it Global
function doSomthing() {

    console.log("My name is Bucky");
    console.log(this === global); // - > this = Global
    
}
//Global Calling
doSomthing();