const responderCallback = function(req, res){
        //Set the content header, aka http header
    res.writeHead(200, {'Content-Type' : 'text/plain'} )
    // res.write("Hello World\n"); //writing response to client, using content-type as 'text/html'
    res.end("Hello World\n")    //This is the response itself; We are sending "Hello World\n" as response
}

const http = require('http')    //Calls the http library
const server = http.createServer( responderCallback );

server.listen(8080) //We cant call server.listen() multiple times