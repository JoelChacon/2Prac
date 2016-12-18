var express = require('express'),
	cors = require('cors'),
	path = require('path'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	port = process.env.PORT || 9090,
	app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")))		

app.listen(port, function() {
	console.log("listening on port: " + port);
})