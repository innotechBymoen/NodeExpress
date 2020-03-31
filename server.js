const express = require('express');
const app = express();
const port = 8080;
const bp = require('body-parser');

app.use(express.static(__dirname +  '/public'));
app.use(bp.urlencoded({extended: false}));

app.get('/', function(request, response){
    //Make http://localhost:8080/?id=45&volume=MAX request to see GET parameters log
    console.log(request.query)
    response.sendFile(__dirname + "/public/html/index.html");
});

app.post('/echo', function(request, response){
    response.send(request.body.statement);
    response.end();
});

app.listen(port, () => {console.log("We're live!")});