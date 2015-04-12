var RecipePreview = React.createClass({displayName: "RecipePreview",
      openRecipe: function(e){
        e.preventDefault();
        this.props.clickCallback(this.props.id);
      },
			render: function(){
		    return(
		      React.createElement("a", {className: "list-group-item", key: this.props.id, href: "#", onClick: this.openRecipe}, 

            React.createElement("h5", {class: "list-group-item-heading"}, this.props.title), 
            React.createElement("p", {class: "list-group-item-text"}, "...")
            
		      )
		    );
		  }
		});

