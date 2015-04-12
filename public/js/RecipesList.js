var result = fetch('/recipes');


var RecipesList = React.createClass({displayName: "RecipesList",
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
            React.createElement(RecipePreview, {id: item._id, title: item.Title, clickCallback: this.props.itemClickCallback})
            );
        }.bind(this));
        return(
          React.createElement("section", {className: "col-sm-3"}, 
            React.createElement("h3", null, "Рецепты:"), 
            React.createElement("div", {className: "list-group"}, 
              items
            )
          )
        );
      }
    });

