var http = require("http");

var PORT = 7000;

function handleRequest(req, res){
    var path = req.url;
    switch(path){
        case "/" :
            res.end("Greetings fellow human!");
            break;
        case "/nice" :
            res.end("You're Awesome!");
            break;
        case "/mean" :
            res.end("Get with the Program Already!...");
    }
    res.end(path);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost: " + PORT);
});