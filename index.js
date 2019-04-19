var http = require("http");
var fs=require('fs');
var counter=0;

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
console.log(request.url);     
if (request.url == '/index.html' || request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/plain'});   
    counter++;
    var msg='Hello World #'+counter+'\n';
    // Send the response body as "Hello World"
    response.end(msg);
    console.log(msg);
}
else if(request.url == '/favicon.ico')
{   
    response.writeHead(200, {'Content-Type': 'image/*'});
    fs.createReadStream('favicon.ico').pipe(response);
    response.end();
    console.log("Sending favicon");
}
else
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    counter++;
    var msg='Hello World #'+counter+'\n';
    // Send the response body as "Hello World"
    response.end(msg);
    console.log(msg);
     

}

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:80/');
