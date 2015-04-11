var RecipeView = React.createClass({
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          <article>
            <div className="col-sm-6">
              <h2>{this.props.recipeData.Title}</h2>
              <div>recipe ingredients list</div>
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
      <section className="col-sm-9">
        {content}
      </section>
      );
  }
});