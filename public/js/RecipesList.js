var testData = [
  {
    id: 111,
    title: 'recipe 1'
  },
  {
    id: 432,
    title: 'recipe 333'
  },
  {
    id: 234,
    title: 'ololo'
  }
];


var el = document.getElementById('recipesListContainer'),
    RecipesList = React.createClass({displayName: "RecipesList",
    	render: function(){
        var items = testData.map(function(item){
          return(
            React.createElement(RecipePreview, {id: item.id, title: item.title})
            );
        });
        return(
          React.createElement("div", {className: "recipes-list"}, 
            items
          )
        );
      }
    });

React.render(
  React.createElement(RecipesList, null),
  el
);