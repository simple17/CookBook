var mongojs = require("mongojs");

var db = mongojs("cookbook", ["ingredients", "recipes", "recipesIngr"]);

function initDatabase (done) {
  db.createCollection("ingredients", function (err, res) {
    if (err) return done(err);
    db.ingredients.createIndex({"Id": 1}, {unique: true}, function (err, res) {
      if (err) return done(err);
      //Ingredints
      insertIngredient({ Id: 1, Name: "Морковь красная", BE: 0.58, Calories: 35, Prot: 1.3, Fat: 0.1, NFattyAcids: 0, Carb: 6.9, K: 200, Na: 21, Mg: 38, Ca: 27, VitC: 5, VitB5: 0.3, VitPP: 1, Fiber: 2.4, Water: 88 } );
      insertIngredient({ Id: 2, Name: "Сахарный песок", BE: 10, Calories: 399, Prot: 0, Fat: 0, NFattyAcids: 0, Carb: 99.8, K: 3, Na: 1, Mg: 0, Ca: 3, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.1 } );
      insertIngredient({ Id: 3, Name: "Яйцо куриное", BE: 0, Calories: 157, Prot: 12.7, Fat: 11.5, NFattyAcids: 0, Carb: 0.7, K: 140, Na: 134, Mg: 12, Ca: 55, VitC:  0, VitB5: 1.3, VitPP: 0.19, Fiber: 0, Water: 74.1 } );
    });
  });

  db.createCollection("recipes", function (err, res) {
  if (err) return done(err);
  db.recipes.createIndex({"Id": 1}, {unique: true}, function (err, res) {
      if (err) return done(err);
      //Recipes
      insertRecipe(
        { Id: 1, 
          Ingredients: 
          [{
            Amount: 4,
            AmountType: "шт.",
            Ingredient: { Name: "Морковь красная", AvgWeight: 75, BE: 0.58, Calories: 35, Prot: 1.3, Fat: 0.1, NFattyAcids: 0, Carb: 6.9, K: 200, Na: 21, Mg: 38, Ca: 27, VitC: 5, VitB5: 0.3, VitPP: 1, Fiber: 2.4, Water: 88 }
          },
          {
            Amount: 100,
            AmountType: "г.",
            Ingredient: { Name: "Сахарный песок", BE: 10, Calories: 399, Prot: 0, Fat: 0, NFattyAcids: 0, Carb: 99.8, K: 3, Na: 1, Mg: 0, Ca: 3, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.1 }
          },
          {
            Amount: 4,
            AmountType: "шт.",
            Ingredient: { Name: "Яйцо куриное", AvgWeight: 55, BE: 0, Calories: 157, Prot: 12.7, Fat: 11.5, NFattyAcids: 0, Carb: 0.7, K: 140, Na: 134, Mg: 12, Ca: 55, VitC:  0, VitB5: 1.3, VitPP: 0.19, Fiber: 0, Water: 74.1 }
          }
          ],
          Title: "Говядина в сливочном соусе", 
          Image: "/img/1.jpg", 
          Instructions: "Говяжью вырезку вымыть, обсушить и очистить от пленок. Нарезать на порционные куски по 290-350  толщиной примерно 5-6 см. Обвязать говядину нитой с двух сторон (вокруг волокон), для того, чтобы мясо сохранило форму. Затем обжарить его о 1.5 мин с каждой стороны на раскаленной сковороде в чайной ложе растительного масла. Посолить, поперчить и поставить в разогретую до 180'С на 10-12 мин для получения средней степени прожарки.Нарезать срокопченую грудинку тонкой соломкой, лук - мелкими кубиками. Обжарить на той же сковороде сначала первую, затем ввести второй и пассировать до прозрачности. Добавить муку, дождаться пока она станет светло коричневоо цвета, и влить вино. Дать выпариться наполовину. Необходимо все время тщательно размешивать соус, чтобы не образовывалось комков. Теперь добавить сметану, сливки, тертый сыр и, по вкусу, паприку. Сыр должен расплавиться, соус увариться еще на половину. Не забвайте ео помешивать, при такой густоте он легко может пригореть.Когда соус будет готов, его можно добавить в емкость для запекания и оставить вместе с говядиной в духовке."});
    });
      /////////////////////////////////
      insertRecipe({
         Id: 2,
         Ingredients: [{
            Amount: 100,
            AmountType: "г.",
            Ingredient: { Name: "Сливочное масло", BE: 0, Calories: 748, Prot: 0.5, Fat: 82.5, NFattyAcids: 2.5, Carb: 0.8, K: 15, Na: 7, Mg: 0, Ca: 12, VitC: 00, VitB5: 0.05, VitPP: 0, Fiber: 0, Water: 16 }
         },
         {
            Amount: 100,
            AmountType: "г.",
            Ingredient: { Name: "Сахарный песок", BE: 10, Calories: 399, Prot: 0, Fat: 0, NFattyAcids: 0, Carb: 99.8, K: 3, Na: 1, Mg: 0, Ca: 3, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.1 }
          },
         {
            Amount: 210,
            AmountType: "г.",
            Ingredient: { Name: "Мука пшеничная высшего сорта", BE: 6.67, Calories: 334, Prot: 10.8, Fat: 1.3, NFattyAcids: 0.62, Carb: 69.9, K: 122, Na: 3, Mg: 16, Ca: 18, VitC: 0, VitB5: 0.3, VitPP: 1.2, Fiber: 3.5, Water: 14 }
          },
          {
            Amount: 2,
            AmountType: "ст.л.",
            Ingredient: { Name: "Молоко 0.5%", BE: 0.34, Calories: 30.8, Prot: 3, Fat: 0.05, NFattyAcids: 0, Carb: 4.9, K: 152, Na: 52, Mg: 15, Ca: 126, VitC: 1.3, VitB5: 0.4, VitPP: 0.59, Fiber: 0, Water: 91.2 }
          },
          {
            Amount: 1,
            AmountType: "шт.",
            Ingredient: { Name: "Белок яичный", AvgWeight: 55, BE: 0, Calories: 157, Prot: 12.7, Fat: 11.5, NFattyAcids: 0, Carb: 0.7, K: 140, Na: 134, Mg: 12, Ca: 55, VitC:  0, VitB5: 1.3, VitPP: 0.19, Fiber: 0, Water: 74.1 }
          }
         ],
         Title: "Песочное печенье хрустящее",
         Image: "/img/2.jpg",
         Instructions: "Мягкое масло растереть с сахаром, потом взбить венчиком. Влить в смесь 2 ст. л. молока и добавить белок одного яйца. Взбивать все в течение 5 минут, пока смесь не станет похожей на крем. Муку просеять, смешать с разрыхлителем, добавить щепотку соли; все хорошо перемешать и всыпать в масляно-сахарную смесь. Вымешать очень нежное, мягкое тесто ложкой. Поверхность для раскатывания присыпать мукой (примерно 10 г), выложить массу и слегка обмять. Тесто будет настолько мягким, что раскатать его можно будет только при наличии большой сноровки и опыта. Духовку разогреть до 170 градусов, противень выложить пекарской бумагой, перенести на него печенье и слегка обмять, придав желаемую форму. Выпекать печенье до готовности (минут 30). Вынуть из духовки и остудить на воздухе, чтобы печенье получилось хрустящим. Приятного аппетита!"
      });
  });

  db.createCollection("recipesIngr", function (err, res) {
  if (err) return done(err);
    //Add ingredient to the recipe
    insertRecipesIngr({recId: 1, ingrId: 1, Amount: 4, AmountType: "шт."});
    insertRecipesIngr({recId: 1, ingrId: 2, Amount: 100, AmountType: "г."});
    insertRecipesIngr({recId: 1, ingrId: 3, Amount: 4, AmountType: "шт."}); 
  });
}

function insertIngredient(data){
	db.ingredients.save( data,function(error, saved){
    if(error)
    {
      console.log("error on save:  " + error);
    }

    else
    {
      console.log("saved");
    }
  });
}

function insertRecipe(data){
	db.recipes.save( data,function(error, saved){
    if(error)
    {
      console.log("error on save:  " + error);
    }

    else
    {
      console.log("saved");
    }
  });
}

function insertRecipesIngr(data){
	db.recipesIngr.save( data,function(error, saved){
    if(error)
    {
      console.log("error on save:  " + error);
    }

    else
    {
      console.log("saved");
    }
  });
}



db.recipesIngr.drop();
db.recipes.drop();
db.ingredients.drop();

initDatabase(function (err) {
	if(err){
		console.log("can't create ingredients" + err);
		db.close();
	} else{
    /*insertIngredient({ Name: "Мука пшеничная высшего сорта", BE: 6.67, Calories: 334, Prot: 10.8, Fat: 1.3, NFattyAcids: 0.62, Carb: 69.9, K: 122, Na: 3, Mg: 16, Ca: 18, VitC: 0, VitB5: 0.3, VitPP: 1.2, Fiber: 3.5, Water: 14 });
    insertIngredient({ Name: "Сметана 10%", BE: 0.17, Calories: 119, Prot: 2.7, Fat: 10, NFattyAcids: 0, Carb: 4.5, K: 124, Na: 40, Mg: 10, Ca: 90, VitC: 0.5, VitB5: 0.3, VitPP: 0.2, Fiber: 0, Water: 82 });
    insertIngredient({ Name: "Картофель", BE: 1.64, Calories: 77, Prot: 2, Fat: 0.4, NFattyAcids: 0.1, Carb: 16.3, K: 568, Na: 5, Mg: 23, Ca: 10, VitC: 20, VitB5: 0.3, VitPP: 1.3, Fiber: 1.4, Water: 78.6 } );
    insertIngredient({ Name: "Сливочное масло", BE: 0, Calories: 748, Prot: 0.5, Fat: 82.5, NFattyAcids: 2.5, Carb: 0.8, K: 15, Na: 7, Mg: 0, Ca: 12, VitC: 00, VitB5: 0.05, VitPP: 0, Fiber: 0, Water: 16 } );
    insertIngredient({ Name: "Молоко 0.5%", BE: 0.34, Calories: 30.8, Prot: 3, Fat: 0.05, NFattyAcids: 0, Carb: 4.9, K: 152, Na: 52, Mg: 15, Ca: 126, VitC: 1.3, VitB5: 0.4, VitPP: 0.59, Fiber: 0, Water: 91.2 } );
    insertIngredient({ Name: "Брокколи", BE: 0.25, Calories: 34, Prot: 2.82, Fat: 0.37, NFattyAcids: 0, Carb: 6.64, K: 316, Na: 33, Mg: 21, Ca: 47, VitC: 89.2, VitB5: 0.57, VitPP: 0.64, Fiber: 2.6, Water: 89.3 } );
    insertIngredient({ Name: "Сыр с голубой плесенью", BE: 0, Calories: 362.57, Prot: 17.61, Fat: 31.04, NFattyAcids: 0, Carb: 1.84, K: 110, Na: 1300, Mg: 40, Ca: 110, VitC: 0.6 , VitB5: 1.2, VitPP: 0.3, Fiber: 0, Water: 45 } );
    insertIngredient({ Name: "Сливки 20%", BE: 0.25, Calories: 207, Prot: 2.5, Fat: 20, NFattyAcids: 0, Carb: 4, K: 109, Na: 35, Mg: 8, Ca: 86, VitC:  0.3, VitB5: 0, VitPP: 0.1, Fiber: 0, Water: 72.8 } );
    insertIngredient({ Name: "Грецкий орех", BE: 0.85, Calories: 656, Prot: 16.2, Fat: 60.8, NFattyAcids: 0, Carb: 11.1, K: 474, Na: 7, Mg: 120, Ca: 89, VitC: 5.8, VitB5: 0.8, VitPP: 1.2, Fiber: 6.1, Water: 3.8 } );
    insertIngredient({ Name: "Тыква", BE: 0.63, Calories: 22, Prot: 1, Fat: 0.1, NFattyAcids: 0, Carb: 4.4, K: 204, Na: 4, Mg: 14, Ca: 25, VitC: 8, VitB5: 0.4, VitPP: 0.5, Fiber: 2, Water: 91.8 } );
    insertIngredient({ Name: "Лук репчатый белый", BE: 0.79, Calories: 45, Prot: 1.5, Fat: 0, NFattyAcids: 0, Carb: 11, K: 146, Na: 4, Mg: 10, Ca: 23, VitC: 7.4, VitB5: 0.06, VitPP: 0.12, Fiber: 1.7, Water: 75 } );
    insertIngredient({ Name: "Лук порей", BE: 0.61, Calories: 36, Prot: 2, Fat: 0.2, NFattyAcids: 0, Carb: 6.3, K: 225, Na: 50, Mg: 10, Ca: 87, VitC: 35, VitB5: 0.1, VitPP: 0.5, Fiber: 2.2, Water: 88 } );
    insertIngredient({ Name: "Цедра лимонная", BE: 0.42, Calories: 47, Prot: 1.5, Fat: 0.3, NFattyAcids: 5.4, Carb: 5.4, K: 160, Na: 6, Mg: 15, Ca: 134, VitC: 129, VitB5: 0.32, VitPP: 0, Fiber: 10.6, Water: 81.6 } );
    insertIngredient({ Name: "Масло оливковое", BE: 0, Calories: 898, Prot: 0, Fat: 99.8, NFattyAcids: 13.2, Carb: 0, K: 1, Na: 2, Mg: 0, Ca: 0, VitC: 0, VitB5: 0, VitPP: 0, Fiber: 0, Water: 0.2 } );
    insertIngredient({ Name: "Свекла", BE: 0.9, Calories: 42, Prot: 1.5, Fat: 0.1, NFattyAcids: 0, Carb: 8.8, K: 288, Na: 46, Mg: 22, Ca: 37, VitC: 10, VitB5: 0.1, VitPP: 0.2, Fiber: 2.5, Water: 86 } );
    insertIngredient({ Name: "Морская капуста", BE: 0, Calories: 24.9, Prot: 0.9, Fat: 0.2, NFattyAcids: 0, Carb: 3, K: 970, Na: 520, Mg: 170, Ca: 40, VitC: 2, VitB5: 0, VitPP: 0.4, Fiber: 0.6, Water: 88 } );
    insertIngredient({ Name: "Майонез", BE: 0.25, Calories: 627, Prot: 2.4, Fat: 67, NFattyAcids: 42.5, Carb: 3.9, K: 63, Na: 513, Mg: 11, Ca: 57, VitC: 0, VitB5: 0, VitPP: 0.1, Fiber: 0, Water: 25 } );
    insertIngredient({ Name: "Сыр Пармезан 40%", BE: 0, Calories: 392, Prot: 35.75, Fat: 25.83, NFattyAcids: 0, Carb: 3.22, K: 92, Na: 1062, Mg: 44, Ca: 1184, VitC: 0, VitB5: 0.45, VitPP: 0, Fiber: 0, Water: 29.16 } );
    insertIngredient({ Name: "Имбирь корень", BE: 5.2, Calories: 80, Prot: 7.28, Fat: 6.75, NFattyAcids: 0, Carb: 63.08, K: 1.5, Na: 32, Mg: 184, Ca: 116, VitC: 12, VitB5: 0.2, VitPP: 0.75, Fiber: 5.9, Water: 78.89 } );
    insertIngredient({ Name: "Чеснок", BE: 1.77, Calories: 149, Prot: 6.5, Fat: 0.5, NFattyAcids: 0.1, Carb: 29.9, K: 260, Na: 17, Mg: 0, Ca: 180, VitC: 10, VitB5: 0.6, VitPP: 1.2, Fiber: 1.5, Water: 60 } );
    insertIngredient({ Name: "Печень куриная", BE: 0.08, Calories: 137.6, Prot: 20.4, Fat: 5.9, NFattyAcids: 5.28, Carb: 3.73, K: 289, Na: 90, Mg: 24, Ca: 15, VitC: 25, VitB5: 2.62, VitPP: 0, Fiber: 0, Water: 62.65 } );
    insertIngredient({ Name: "Сливки 35%", BE: 0.25, Calories: 337, Prot: 2.2, Fat: 35, NFattyAcids: 0, Carb: 3.2, K: 90, Na: 31, Mg: 7, Ca: 86, VitC: 0.2, VitB5: 0, VitPP: 0.1, Fiber: 0, Water: 59 } );
    insertIngredient({ Name: "Помидор", BE: 0.15, Calories: 19.9, Prot: 0.6, Fat: 0.2, NFattyAcids: 0, Carb: 4.2, K: 290, Na: 40, Mg: 20, Ca: 14, VitC: 25, VitB5: 0.3, VitPP: 0.5, Fiber: 0.8, Water: 93.5 } );
    insertIngredient({ Name: "Шоколад горький 75%", BE: 25, Calories: 539, Prot: 6.2, Fat: 35.4, NFattyAcids: 0, Carb: 48.2, K: 363, Na: 8, Mg: 133, Ca: 45, VitC: 0, VitB5: 0, VitPP: 0.9, Fiber: 7.4, Water: 0.8 } );
    insertIngredient({ Name: "Дрожжи сухие", BE: 1.7, Calories: 325, Prot: 40.44, Fat: 7.61, NFattyAcids: 0, Carb: 14.32, K: 955, Na: 51, Mg: 54, Ca: 30, VitC: 0.3, VitB5: 13.5, VitPP: 40.2, Fiber: 26.9, Water: 5.08 } );*/
  }
    
});






