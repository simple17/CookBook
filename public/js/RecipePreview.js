var RecipePreview = React.createClass({displayName: "RecipePreview",
      openRecipe: function(e){
        e.preventDefault();
        this.props.clickCallback(this.props.id);
      },
			render: function(){
		    return(
		      React.createElement("article", {className: "row", key: this.props.id}, 
            React.createElement("a", {href: "#", onClick: this.openRecipe}, this.props.title)
		      )
		    );
		  }
		});

