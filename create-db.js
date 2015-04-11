

var mongojs = require("mongojs");

var db = mongojs("cookbook", ["ingredients"]);

function initDatabase (done) {
  db.createCollection("ingredients", function (err, res) {
    if (err) 
    	{
    		 return done(err);
    	}
      db.ingredients.createIndex({"Name": 1}, {unique: true}, function (err, res) {
      if (err) return done(err);
      return done();
    });






    var ingr = db.ingredients.find();
    console.log("ingredients was created " + ingr.length);
  });
}

function insertIngredient(data){
	db.ingredients.save( data,function(error, saved)
	    {
	        if(error)
	        {
	            console.log(error);
	        }

	        else
	        {
	            console.log("saved");
	        }
	    } );
	var ttt = db.ingredients.find();
	console.log("length = " + ttt.length);
}

initDatabase(function (err) {
	if(err){
			console.log("can't create ingredients" + err);
           db.close();
	}
    else{
    	console.log("start insert");
        insertIngredient({ Name: "Мука пшеничная высшего сорта", BE: 6.67, Calories: 334, Prot: 10.8, Fat: 1.3, NFattyAcids: 0.62, Carb: 69.9, K: 122, Na: 3, Mg: 16, Ca: 18, VitC: 0, VitB5: 0.3, VitPP: 1.2, Fiber: 3.5, Water: 14 });
        insertIngredient({ Name: "Сметана 10%", BE: 0.17, Calories: 119, Prot: 2.7, Fat: 10, NFattyAcids: 0, Carb: 4.5, K: 124, Na: 40, Mg: 10, Ca: 90, VitC: 0.5, VitB5: 0.3, VitPP: 0.2, Fiber: 0, Water: 82 });
            insertIngredient( { Name: "Картофель", BE: 1.64, Calories: 77, Prot: 2, Fat: 0.4, NFattyAcids: 0.1, Carb: 16.3, K: 568, Na: 5, Mg: 23, Ca: 10, VitC: 20, VitB5: 0.3, VitPP: 1.3, Fiber: 1.4, Water: 78.6 } );
    insertIngredient( { Name: "Яйцо куриное", BE: 0, Calories: 157, Prot: 12.7, Fat: 11.5, NFattyAcids: 0, Carb: 0.7, K: 140, Na: 134, Mg: 12, Ca: 55, VitC:  0, VitB5: 1.3, VitPP: 0.19, Fiber: 0, Water: 74.1 } );
    insertIngredient( { Name: "Сливочное масло", BE: 0, Calories: 748, Prot: 0.5, Fat: 82.5, NFattyAcids: 2.5, Carb: 0.8, K: 15, Na: 7, Mg: 0, Ca: 12, VitC: 00, VitB5: 0.05, VitPP: 0, Fiber: 0, Water: 16 } );
    insertIngredient( { Name: "Молоко 0.5%", BE: 0.34, Calories: 30.8, Prot: 3, Fat: 0.05, NFattyAcids: 0, Carb: 4.9, K: 152, Na: 52, Mg: 15, Ca: 126, VitC: 1.3, VitB5: 0.4, VitPP: 0.59, Fiber: 0, Water: 91.2 } );
    insertIngredient( { Name: "Брокколи", BE: 0.25, Calories: 34, Prot: 2.82, Fat: 0.37, NFattyAcids: 0, Carb: 6.64, K: 316, Na: 33, Mg: 21, Ca: 47, VitC: 89.2, VitB5: 0.57, VitPP: 0.64, Fiber: 2.6, Water: 89.3 } );
    insertIngredient( { Name: "Сыр с голубой плесенью", BE: 0, Calories: 362.57, Prot: 17.61, Fat: 31.04, NFattyAcids: 0, Carb: 1.84, K: 110, Na: 1300, Mg: 40, Ca: 110, VitC: 0.6 , VitB5: 1.2, VitPP: 0.3, Fiber: 0, Water: 45 } );
    insertIngredient( { Name: "Сливки 20%", BE: 0.25, Calories: 207, Prot: 2.5, Fat: 20, NFattyAcids: 0, Carb: 4, K: 109, Na: 35, Mg: 8, Ca: 86, VitC:  0.3, VitB5: 0, VitPP: 0.1, Fiber: 0, Water: 72.8 } );
    insertIngredient( { Name: "Грецкий орех", BE: 0.85, Calories: 656, Prot: 16.2, Fat: 60.8, NFattyAcids: 0, Carb: 11.1, K: 474, Na: 7, Mg: 120, Ca: 89, VitC: 5.8, VitB5: 0.8, VitPP: 1.2, Fiber: 6.1, Water: 3.8 } );
insertIngredient( { Name: "Тыква", BE: 0.63, Calories: 22, Prot: 1, Fat: 0.1, NFattyAcids: 0, Carb: 4.4, K: 204, Na: 4, Mg: 14, Ca: 25, VitC: 8, VitB5: 0.4, VitPP: 0.5, Fiber: 2, Water: 91.8 } );
insertIngredient( { Name: "Лук репчатый белый", BE: 0.79, Calories: 45, Prot: 1.5, Fat: 0, NFattyAcids: 0, Carb: 11, K: 146, Na: 4, Mg: 10, Ca: 23, VitC: 7.4, VitB5: 0.06, VitPP: 0.12, Fiber: 1.7, Water: 75 } );
insertIngredient( { Name: "Лук порей", BE: 0.61, Calories: 36, Prot: 2, Fat: 0.2, NFattyAcids: 0, Carb: 6.3, K: 225, Na: 50, Mg: 10, Ca: 87, VitC: 35, VitB5: 0.1, VitPP: 0.5, Fiber: 2.2, Water: 88 } );
insertIngredient( { Name: "Морковь красная", BE: 0.58, Calories: 35, Prot: 1.3, Fat: 0.1, NFattyAcids: 0, Carb: 6.9, K: 200, Na: 21, Mg: 38, Ca: 27, VitC: 5, VitB5: 0.3, VitPP: 1, Fiber: 2.4, Water: 88 } );
insertIngredient( { Name: "Сахарный песок", BE: 10, Calories: 399, Prot: 0, Fat: 0, NFattyAcids: 0, Carb: 99.8, K: 3, Na: 1, Mg: 0, Ca: 3, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.1 } );
insertIngredient( { Name: "Цедра лимонная", BE: 0.42, Calories: 47, Prot: 1.5, Fat: 0.3, NFattyAcids: 5.4, Carb: 5.4, K: 160, Na: 6, Mg: 15, Ca: 134, VitC: 129, VitB5: 0.32, VitPP: 0, Fiber: 10.6, Water: 81.6 } );
insertIngredient( { Name: "Масло оливковое", BE: 0, Calories: 898, Prot: 0, Fat: 99.8, NFattyAcids: 13.2, Carb: 0, K: 1, Na: 2, Mg: 0, Ca: 0, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.2 } );
    }
});






