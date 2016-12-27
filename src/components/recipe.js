var React = require("react");

var Recipe = React.createClass({
    
     getInitialState: function() {
      return {
        update: 1
      };  
    },
    
    updateList: function() {
      var list = [];

      for (let i = 0; i < window.localStorage.length - 1; i++)  {      
         var key = window.localStorage.key(i);
         list.push(window.localStorage.getItem(key));         
      }
      
      this.setState({
        update: 1+1
      });     
      
      list.map(function(name){
       return (
            <div className="recipe">
              <h2>{name}</h2>
            </div>
                );
    });
      
    },
    
    render: function() {
        return (
      <div className="full-recipe">
        {this.updateList}
      </div> 
            );
    }
});

module.exports = Recipe;


/*

var React = require("react");

var Recipe = React.createClass({

    updateList: function() {
      var list = [];

      for (let i = 0; i < window.localStorage.length - 1; i++)  {      
         var key = window.localStorage.key(i);
         list.push(window.localStorage.getItem(key));         
      }
      
      this.setState({
        list: list
      });      
    },

    componentDidMount: function() {
      this.updateList();  
    },

    
    render: function() {
        return (
          <div className="full-recipe">
            {this.state.list.map(function (item) {
              return (
                <div className="recipe">
                  <h2>{item.name}</h2>
                </div>            
              );
            })}
            <button onClick={function() {this.updateList()}}>refresh the list</button>
          </div> 
        );
    }
});

module.exports = Recipe;

*/