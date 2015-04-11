var RecipePreview = React.createClass({displayName: "RecipePreview",
			render: function(){
		    return(
		      React.createElement("article", {className: "row", key: this.props.id}, 
            this.props.title
		      )
		    );
		  }
		});

