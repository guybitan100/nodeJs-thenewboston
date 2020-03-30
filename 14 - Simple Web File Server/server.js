var http = require('http');
var fs = require('fs');

//404 response

function send404Response(response) {
    response.writeHead(404, {"Context-type": "text/plain"});
    response.write("Error 404: page not found !");
    response.end();
}

function onRequest(request, response) {

    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-type": "text/html"});
        //Read the index.html as stream and pipe in to the response back
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
