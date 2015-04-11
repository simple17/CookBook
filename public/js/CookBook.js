var CookBook = React.createClass({displayName: "CookBook",
  getInitialState: function(){
    return {data: {currentItem: null}}
  },
  fetchRecipe: function(recipeId){
    this.setState({
      data: {
        currentItem: {
          title: 'olowos',
          id: 123123
        }
      }
    });
  },
  render: function(){
    return(
      React.createElement("div", {className: "container"}, 
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