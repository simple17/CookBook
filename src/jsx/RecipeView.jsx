var RecipeView = React.createClass({
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          <article>
            <div className="col-sm-6">
              <h2>{this.props.recipeData.title}</h2>
              <div>recipe ingredients list</div>
              <div>instructions</div>
            </div>
            <div className="col-sm-6">
              <img src="http://loremflickr.com/320/240" alt=""/>
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