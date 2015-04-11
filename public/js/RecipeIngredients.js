var RecipeIngredients = React.createClass({displayName: "RecipeIngredients",
  getInitialState: function(){
    return {}
  },
	render: function(){
    if(typeof this.props.rows === 'undefined'){
      return(
        React.createElement("p", null, "Нет ингредиентов.")
        )
    }
    var rows = this.props.rows.map(function(row){
      return(
        React.createElement("tr", null, 
          React.createElement("td", null, row.Name), 
          React.createElement("td", null, row.Amount, " ", row.AmountType)
        )
        );
    }.bind(this));

    return(
      React.createElement("table", {className: "table"}, 
        React.createElement("tr", null, 
          React.createElement("th", null, "Название"), 
          React.createElement("th", null, "Количество")
        ), 
        rows
      )
    );
	}
});