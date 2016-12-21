var React = require("react");
var ReactDOM = require("react-dom");
var Popupbox = require("./popupbox");
var Recipe = require("./recipe");


var App = React.createClass({
    
    getInitialState: function() {
      return {
        popupVisible: false
      };  
    },
    
    toggleVisible: function () {
        if(this.state.popupVisible) {
            this.setState({ popupVisible: false });
        }
        else {
            this.setState({ popupVisible: true });
        };
    },
    
    render: function() {
        return (
            <div class="site-content">
                <Recipe recipeTitle={window.localStorage.getItem("recipe name" + window.localStorage.getItem("counter"))} />
            
                //renders popup box if the state for it is true
                {this.state.popupVisible ? <Popupbox closePopup={this.toggleVisible.bind(this)} /> : ""}
                <div className="recipe-container">
                </div>
                <button className="add-recipe btn" onClick={this.toggleVisible}>Add Recipe</button>
            </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.querySelector(".render-target")
);