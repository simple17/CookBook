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

          <h1 className="text-center">CookBook</h1>

        <div className="panel panel-default">

          <div className="panel-body">

              <RecipesList itemClickCallback={this.fetchRecipe} current={this.state.data.currentItem ? this.state.data.currentItem._id : null}/>
              <RecipeView recipeData={this.state.data.currentItem} />

          </div>
        <div className="panel-footer">FLS hackathon</div>
      </div>
    </div>
    );
  }
});

//CookBookApp
React.render(
  <CookBook />,
  document.getElementById('CookBookApp')
  );