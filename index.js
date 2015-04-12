var express = require("express"),
    url = require('url'),
    mongojs = require("mongojs"),
    db = mongojs("cookbook", ["ingredients", "recipes", "recipesIngr"]),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = __dirname + '/public';


app.get("/", function (req, res) {
  res.redirect("/404.html");
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));



app.listen(port, hostname);