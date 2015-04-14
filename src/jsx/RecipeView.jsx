var RecipeView = React.createClass({
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          <article>
            <div className="row">
              
              <div className="col-sm-8">
                <h2>{this.props.recipeData.Title}</h2>
                <img src={this.props.recipeData.Image} alt="" className="img-responsive" />
                <h3>Инструкция:</h3>
                <div>{this.props.recipeData.Instructions}</div>
              </div>
              <div className="col-sm-4">
                <h3>Ингредиенты:</h3>
                <RecipeIngredients rows={this.props.recipeData.Ingredients} id={this.props.recipeData.Id}/>
                <h3>Калькулятор:</h3>
                <RecipeCalc variables={this.props.recipeData.Ingredients} id={this.props.recipeData.Id}/>
              </div>
            </div>
            
          </article>
          );
      }.bind(this))();
    }
    return(
      <section className="col-sm-9" key={this.props.recipeData ? this.props.recipeData.Id : 0}>
        {content}
      </section>
      );
  }
});