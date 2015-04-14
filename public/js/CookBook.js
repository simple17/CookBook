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

          React.createElement("h1", {className: "text-center"}, "CookBook"), 

        React.createElement("div", {className: "panel panel-default"}, 

          React.createElement("div", {className: "panel-body"}, 

              React.createElement(RecipesList, {itemClickCallback: this.fetchRecipe, current: this.state.data.currentItem ? this.state.data.currentItem._id : null}), 
              React.createElement(RecipeView, {recipeData: this.state.data.currentItem})

          ), 
        React.createElement("div", {className: "panel-footer"}, "FLS hackathon")
      )
    )
    );
  }
});

//CookBookApp
React.render(
  React.createElement(CookBook, null),
  document.getElementById('CookBookApp')
  );