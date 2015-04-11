var RecipeView = React.createClass({displayName: "RecipeView",
  render: function(){
    var content = '';

    if(this.props.recipeData){
      content = (function(){
        return(
          React.createElement("article", null, 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("h2", null, this.props.recipeData.title), 
              React.createElement("div", null, "recipe ingredients list"), 
              React.createElement("div", null, "instructions")
            ), 
            React.createElement("div", {className: "col-sm-6"}, 
              React.createElement("img", {src: "http://loremflickr.com/320/240", alt: ""}), 
              React.createElement("div", null, "Calc")
            )
          )
          );
      }.bind(this))();
    }
    return(
      React.createElement("section", {className: "col-sm-9"}, 
        content
      )
      );
  }
});