const http = require('http'); // import module
fs = require('fs');

var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res) {
    res.type('text/plain');
    res.send()
})

// custom 404 page
app.use(function(req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
})

// custom 505 page
app.use(function(err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
})

app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
})





/*function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err,data) {
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType});
            res.end(data);
        }
    })
}





// use create server method on the http variable to create server object
http.createServer(function(req,res) {
    
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase();
    switch(path) {
        case '':
           serveStaticFile(res, '/public/homepage.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/europe':
            serveStaticFile(res, '/public/europe.html', 'text/html');
            break;
        case '/oceania':
             serveStaticFile(res, '/public/oceania.html', 'text/html');
            break;
         case '/asia':
             serveStaticFile(res, '/public/asia.html', 'text/html');
            break;
        case '/img/Norton.jpg':
            serveStaticFile(res, '/public/img/Norton.jpg', 'image/jpeg');
            break;  
         case '/holiday':
            serveStaticFile(res, '/public/holiday.html', 'text/html');
            break;     
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
    }).listen(3000);
    console.log('Server started on port 3000, ctrl^c to quit.')*/