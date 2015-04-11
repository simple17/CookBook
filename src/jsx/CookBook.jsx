var CookBook = React.createClass({
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
      <div className="container">
        <RecipesList itemClickCallback={this.fetchRecipe} />
        <RecipeView recipeData={this.state.data.currentItem} />
      </div>
    );
  }
});

//CookBookApp
React.render(
  <CookBook />,
  document.getElementById('CookBookApp')
  );