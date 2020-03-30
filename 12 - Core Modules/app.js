//Core module didnt need path only the name of the module
var fs = require ('fs');
fs.writeFileSync("corn.txt","Corn is good, Corn is life");
console.log(fs.readFileSync("corn.txt").toString());