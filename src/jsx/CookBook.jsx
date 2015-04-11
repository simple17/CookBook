var CookBook = React.createClass({
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
      <div className="container">
        <div className="row">
          <h1 className="col-sm-12 text-center">CookBook</h1>
        </div>
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