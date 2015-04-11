var RecipeIngredients = React.createClass({displayName: "RecipeIngredients",
	render: function(){
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