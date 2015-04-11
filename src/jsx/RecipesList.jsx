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
    RecipesList = React.createClass({
    	render: function(){
        var items = testData.map(function(item){
          return(
            <RecipePreview id={item.id} title={item.title}/>
            );
        });
        return(
          <div className="recipes-list">
            {items}
          </div>
        );
      }
    });

React.render(
  <RecipesList/>,
  el
);