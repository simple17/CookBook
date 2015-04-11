var RecipeView = React.createClass({displayName: "RecipeView",
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          React.createElement("article", null, 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("h2", null, this.props.recipeData.Title), 
              React.createElement("h3", null, "Ингредиенты:"), 
              React.createElement(RecipeIngredients, {rows: this.props.recipeData.Ingredients}), 
              React.createElement("h3", null, "Инструкция:"), 
              React.createElement("div", null, this.props.recipeData.Instructions)
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("img", {src: this.props.recipeData.Image, alt: ""}), 
              React.createElement("div", null, "Calc")
            )
          )
          );
      }.bind(this))();
    }
    return(
      React.createElement("section", {className: "col-sm-10"}, 
        content
      )
      );
  }
});