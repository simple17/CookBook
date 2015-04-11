var RecipeView = React.createClass({
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          <article>
            <div className="col-sm-6">
              <h2>{this.props.recipeData.Title}</h2>
              <h3>Ингредиенты:</h3>
              <RecipeIngredients rows={this.props.recipeData.Ingredients}/>
              <h3>Инструкция:</h3>
              <div>{this.props.recipeData.Instructions}</div>
            </div>
            <div className="col-sm-6">
              <img src={this.props.recipeData.Image} alt=""/>
              <div>Calc</div>
            </div>
          </article>
          );
      }.bind(this))();
    }
    return(
      <section className="col-sm-10">
        {content}
      </section>
      );
  }
});