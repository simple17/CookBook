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
        calories = 0;

    this.props.variables.forEach(function(i){
      var mult;
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
      calories += parseInt((i.Ingredient.Calories * mult).toFixed(2));
    });

    return(
      React.createElement("table", {className: "table", key: this.props.id}, 
        React.createElement("tr", null, 
          React.createElement("td", null, "Белок"), 
          React.createElement("td", null, protein, " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "Углеводы"), 
          React.createElement("td", null, carbohydrate, " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "Жиры"), 
          React.createElement("td", null, fat, " г.")
        ), 
        React.createElement("tr", null, 
          React.createElement("td", null, "калорийность"), 
          React.createElement("td", null, calories, " ккал.")
        )
      )
      );
  }
});