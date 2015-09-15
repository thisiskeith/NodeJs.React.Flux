var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 17220;

app.get('/', function (req, res) {
    res.render('index', { title: 'NodeJS.React.Flux' });
});

app.listen(port);

console.log('NodeJS listening on', port);
