
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app =express();

app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dateVal', function(req,res){

var dateVal = req.params.dateVal;

var dateFormatingOptions = {
year:'numeric',
month:'long',
day:'numeric'
};
if(isNaN(dateVal)){
var naturalDate = new Date(dateVal *1000)
naturalDate = naturalDate.tolocaleDatestring("en-us", dateFormatingOptions);
var unixDate = new Date(dateVal).getTime()/1000;
}
else
{
var unixdate=dateVal;
naturalDate = naturalDate.tolocaleDatestring("en-us", dateFormatingOptions);
}

res.json({unix: unixDate, natural: naturalDate});
});

app.listen(3000, function(){
console.log("I'm going to work");
});
