var React = require("react");

var list = [];

for (let i = 0; i < window.localStorage.length - 1; i++)  {      
   var key = window.localStorage.key(i);
   list.push(window.localStorage.getItem(key));
   console.log(window.localStorage.getItem(key));
}


var Recipe = React.createClass({
    
    listItems: list.map(function(name){
       return (
            <div className="recipe">
              <h2>{name}</h2>
            </div>
                );
    }),
    
    render: function() {
        return (
      <div className="full-recipe">
        {this.listItems}
      </div> 
            );
    }
});

module.exports = Recipe;