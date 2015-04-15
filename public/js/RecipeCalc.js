var RecipeCalc = React.createClass({displayName: "RecipeCalc",
	getInitialState: function(){
    return {}
  },
  render: function(){
    if(typeof this.props.variables === 'undefined'){
      return(
        React.createElement("p", null, "Нет ингредиентов.")
        )
    }

    var protein = 0,
        carbohydrate = 0,
        fat = 0,
        calories = 0,
        sumwWeight = 0;

    this.props.variables.forEach(function(i){
      var weight;
      switch(i.AmountType){
        case 'г.':
          weight = i.Amount;
          break;
        case 'шт.':
          if(typeof i.Ingredient.AvgWeight === 'undefined'){
            throw new Error("For ingredient " + i.Ingredient.Name + " average weight should be set");
          }
          weight = i.Amount * i.Ingredient.AvgWeight;
          break;
        case 'ст.л.':
          weight = i.Amount * 16;  //TODO suppose that average weight for this amount type is 16gr/need to use proper calculation based on relation of weight/volume
          break;
        default:
         throw new Error("Unknown amount type " + i.AmountType); 
      }
      protein += weight * i.Ingredient.Prot;
      carbohydrate += weight * i.Ingredient.Carb;
      fat += weight * i.Ingredient.Fat;
      calories += weight * i.Ingredient.Calories;
      sumwWeight += weight;

      /*var mult;
      if(i.AmountType !== 'г.'){
        if(typeof i.Ingredient.AvgWeight === 'undefined'){
          return;
        }
        mult = i.Amount * i.Ingredient.AvgWeight / 100;
      } else{
        mult = i.Amount / 100;
      }

      protein += parseInt((i.Ingredient.Prot * mult).toFixed(2));
      carbohydrate += parseInt((i.Ingredient.Carb * mult).toFixed(2));
      fat += parseInt((i.Ingredient.Fat * mult).toFixed(2));
      calories += parseInt((i.Ingredient.Calories * mult).toFixed(2));*/
    });

    return(
      React.createElement("table", {className: "table", key: this.props.id}, 
        React.createElement("tr", null, 
          React.createElement("td", null, "Белок"), 
          React.createElement("td", null, (protein/sumwWeight).toFixed(1), " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "Углеводы"), 
          React.createElement("td", null, (carbohydrate/sumwWeight).toFixed(1), " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "Жиры"), 
          React.createElement("td", null, (fat/sumwWeight).toFixed(1), " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "калорийность"), 
          React.createElement("td", null, (calories/sumwWeight).toFixed(1), " ккал.")
        )
      )
      );
  }
});