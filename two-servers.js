var http = require("http");

var PORT7000 = 7000;
var PORT7500 = 7500;

function goodRequest(request, response){
    response.end("You're Amazing! Path Hit, BINGO!" + request.url);
}

function badRequest(request, response){
    response.end("You're having a lousy day today!! You need to refresh and try again tomorrow!" + request.url);
}

var goodServer = http.createServer(goodRequest);
var badServer = http.createServer(badRequest);

goodServer.listen(PORT7000, function(){
    console.log("Server listening on http://localhost: " + PORT7000);
});

badServer.listen(PORT7500, function(){
    console.log("Server listening on: http//localhost: " + PORT7500);
});