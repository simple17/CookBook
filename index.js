var express = require("express"),
    url = require('url'),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = __dirname + '/public';

app.get("/", function (req, res) {
  res.redirect("/index.html");
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

app.get('/recipe', function(req, res){
  var url_parts = url.parse(req.url, true),
      query = url_parts.query;
      if(query.id){
        resObject = {
                Id: query.id,
                Title: "Морковка с яйцом и сахаром",
                Image: "http://loremflickr.com/320/240",
                Instructions: "Порубайте морковку, залейте яйцом и посыпьте сахаром.",
                Ingredients: [
                  {
                    Name: "Морковка",
                    Amount: "4",
                    AmountType: "шт."
                  },
                  {
                    Name: "Сахар",
                    Amount: "100",
                    AmountType: "г."
                  },
                  {
                    Name: "Яйцо",
                    Amount: "4",
                    AmountType: "шт."
                  }
                ]
              };
      } else{
        resObject = {}
      }
      console.log(query.id, resObject);
      res.end(JSON.stringify(resObject));
});

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);