var result = fetch('/recipes');


var RecipesList = React.createClass({
      getInitialState: function(){
        return {data: []};
      },
      componentDidMount:function(){
        result.then(function(response) {
          console.log('response', response)
          console.log('header', response.headers.get('Content-Type'))
          return response.text()
        }).then(function(data) {
          var stateData = JSON.parse(data);
          this.setState({data: stateData});
        }.bind(this)).catch(function(ex) {
          console.log('failed', ex)
        })
      },
    	render: function(){
        var items = this.state.data.map(function(item){
          return(
            <RecipePreview id={item._id} title={item.Title} clickCallback={this.props.itemClickCallback}/>
            );
        }.bind(this));
        return(
          <section className="col-sm-2">
            <h3>Рецепты:</h3>
            {items}
          </section>
        );
      }
    });

