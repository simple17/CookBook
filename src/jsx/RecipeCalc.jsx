var RecipeCalc = React.createClass({
	getInitialState: function(){
    return {}
  },
  render: function(){
    if(typeof this.props.variables === 'undefined'){
      return(
        <p>Нет ингредиентов.</p>
        )
    }

    var protein = 0,
        carbohydrate = 0,
        fat = 0;

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
    });

    return(
      <table className="table" key={this.props.id}>
        <tr>
          <td>Белок</td>
          <td>{protein} г.</td>
        </tr>
        <tr>
          <td>Углеводы</td>
          <td>{carbohydrate} г.</td>
        </tr>
        <tr>
          <td>Жиры</td>
          <td>{fat} г.</td>
        </tr>
      </table>
      );
  }
});