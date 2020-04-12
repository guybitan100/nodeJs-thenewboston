//Array of objects
let students = [{name: "Mary", score: 90, school: "East"},
    {name: "James", score: 100, school: "East"},
    {name: "Steve", score: 40, school: "East"},
    {name: "Gabe", score: 90, school: "West"},
    {name: "Rachel", score: 85, school: "East"},
    {name: "Rochelle", score: 95, school: "West"},
    {name: "Lynette", score: 75, school: "East"}];


let processStudets = function (data, callback) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].school.toLocaleLowerCase() == "east") {
            if (typeof callback === "function") { // ===	equal value and equal type
                callback(data[i]);
            }
        }
    }
}

//Call 1
processStudets(students, function (obj) {
    if (obj.score > 60) {
        console.log(obj.name + " passed.");
    }
});


let determineTotal = function () {
    let total = 0;
    count = 0;
    processStudets(students, function (obj) {
        total += obj.score;
        count++;
    });
    console.log("Total score: " + total + " - Total Count: " + count);
}

//Call 2
determineTotal();