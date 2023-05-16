var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.setHeader("Charset", "UTF-8");
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<html><head><title> Query String</title></head><body>");

    var querystring = url.parse(req.url, true).query
    for(var i in querystring){
        res.write("<p>" + i + ":" +querystring[i] + "</p>");
    }

    res.end("</body>");
}).listen(8080);




//const express = require('express');
//const app = express();

//app.get('/', (req, res) => {

    //res.send("Oi,mundinho! <b>Você acabou de ser criado, estou aprendendo sobre NODE</b>");
    //res.send(Date());
//}

//);

//app.listen(3001);