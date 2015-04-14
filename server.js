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
        resObject = db.recipes.findOne({ _id:mongojs.ObjectId(query.id) }, function(err, doc){
          res.end(JSON.stringify(doc));
          /*var recipe = doc;
          recipe.Ingredients = [];
          db.recipesIngr.find({"recId" : recipe.Id}, function(err, docx){
            console.log(docx);
            recipe.Ingredients = docx;
            res.end(JSON.stringify(recipe));
          })*/
         // 
        }.bind(this));
        //console.log("resObject " + resObject);
        /*resObject = {
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
              };*/
      } else{
        resObject = {}
      }
      //console.log(query.id, resObject);
      
});

app.get('/recipes', function(req, res){
  db.recipes.find({}, function(err, docs){
    console.log(docs.length);
    res.end(JSON.stringify(docs));
  });

});

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);