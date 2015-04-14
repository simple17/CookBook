var RecipePreview = React.createClass({
      openRecipe: function(e){
        e.preventDefault();
        this.props.clickCallback(this.props.id);
      },
			render: function(){
        var classes = 'list-group-item ';
        if(this.props.isActive){
          classes+='active';
        }
		    return(
		      <a className={classes} key={this.props.id} href="#" onClick={this.openRecipe}>
            {this.props.title}  
		      </a>
		    );
		  }
		});

