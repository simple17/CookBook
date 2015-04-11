var RecipePreview = React.createClass({
			render: function(){
		    return(
		      <article className="row" key={this.props.id}>
            {this.props.title}
		      </article>
		    );
		  }
		});

