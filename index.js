const express = require('express');

const app = express();

app.get('/', function(req, resp){
    resp.send('First project using Docker');
});

app.listen(3000);