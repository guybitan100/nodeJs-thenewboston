var connect = require('connect');
var http = require('http');
var app = connect();

function profile(request, response) {
    console.log("user requested profile");
}
function forum(request, response) {
    console.log("user requested forum");
}
//Path handle (Endpoint)
//Run http://localhost:8888/profile
app.use('/profile',profile);
//Run http://localhost:8888/forum
app.use('/forum',forum);


http.createServer(app).listen(8888);
console.log("Server is now running...");