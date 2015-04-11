var CookBook = React.createClass({displayName: "CookBook",
  getInitialState: function(){
    return {data: {currentItem: null}}
  },
  fetchRecipe: function(recipeId){
    var recipe = fetch('/recipe?id=' + recipeId);

    recipe.then(function(response) {
        return response.text()
      }).then(function(data) {
        this.setState({
          data: {
            currentItem: JSON.parse(data)
          }
        });
      }.bind(this)).catch(function(ex) {
        console.log('failed', ex)
      });
  },
  render: function(){
    return(
      React.createElement("div", {className: "container"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("h1", {className: "col-sm-12 text-center"}, "CookBook")
        ), 
        React.createElement(RecipesList, {itemClickCallback: this.fetchRecipe}), 
        React.createElement(RecipeView, {recipeData: this.state.data.currentItem})
      )
    );
  }
});

//CookBookApp
React.render(
  React.createElement(CookBook, null),
  document.getElementById('CookBookApp')
  );