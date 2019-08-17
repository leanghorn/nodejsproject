const express = require('express');
const app = express();
app.get('/', function(req, res) {
		res.send("Hello Nodejs project");
});

app.get('/hi', function(req, res) {
		res.send("Hello how are you");
});

app.listen(8080, function(){
		console.log('app is nuning in port 8080');
});
