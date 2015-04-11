var RecipePreview = React.createClass({
      openRecipe: function(e){
        e.preventDefault();
        this.props.clickCallback(this.props.id);
      },
			render: function(){
		    return(
		      <article className="row" key={this.props.id}>
            <a href="#" onClick={this.openRecipe}>{this.props.title}</a>
		      </article>
		    );
		  }
		});

