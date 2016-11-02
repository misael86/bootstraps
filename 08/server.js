/**
 * Created by Misse on 2016-11-02.
 */
var cors = require('cors');
var express = require('express');
var morgan = require('morgan');

var app = express();

var whitelist = ['http://localhost:8080'];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    },
    credentials: false
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send([
        { name: "test1", value: "value1" },
        { name: "test2", value: "value2" }
    ])
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Magic happens on port ' + port + ' since ' + (new Date));
});