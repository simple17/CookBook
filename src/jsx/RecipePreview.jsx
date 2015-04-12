var RecipePreview = React.createClass({
      openRecipe: function(e){
        e.preventDefault();
        this.props.clickCallback(this.props.id);
      },
			render: function(){
		    return(
		      <a className="list-group-item" key={this.props.id} href="#" onClick={this.openRecipe}>

            <h5 class="list-group-item-heading">{this.props.title}</h5>
            <p class="list-group-item-text">...</p>
            
		      </a>
		    );
		  }
		});

