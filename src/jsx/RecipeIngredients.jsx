var RecipeIngredients = React.createClass({
	render: function(){
    var rows = this.props.rows.map(function(row){
      return(
        <tr>
          <td>{row.Name}</td>
          <td>{row.Amount} {row.AmountType}</td>
        </tr>
        );
    }.bind(this));

    return(
      <table className="table">
        <tr>
          <th>Название</th>
          <th>Количество</th>
        </tr>
        {rows}
      </table>
    );
	}
});