var React = require("react");
var Recipe = require("./recipe");

var Popupbox = React.createClass({
      //this is temporary. for testing purposes
      clearStorage: function() {
        window.localStorage.clear();
      },
      
       addRecipe: function() {
         var recipeName = document.querySelector(".recipe-name").value;
         var recipeCounter = window.localStorage.setItem("counter", window.localStorage.length);
         window.localStorage.setItem("recipe name" + window.localStorage.getItem("counter"), recipeName);
         alert(window.localStorage.length);
         alert(window.localStorage.getItem("recipe name" + window.localStorage.getItem("counter") ));
       },
  
       render: function() {
          return (
            <div>
              <div className="overlay" onClick={this.props.closePopup}></div>
              <div className="popup">
                <h3 className="popup-title">Add a recipe</h3>
                <div className="popup-recipe">
                  <h4>Recipe</h4>
                  <input className="recipe-name" />
                </div>
                <div className="popup-ingredients">
                  <h4>Ingredients</h4>
                  <textarea className="recipe-ingredients" rows="3"></textarea>
                </div>
                <div className="popup-buttons">
                  <button className="add-edit" onClick={this.addRecipe}>Add Recipe</button>
                  <button className="close" onClick={this.props.closePopup}>Close</button>
                  <button onClick={this.clearStorage}>CLEAR STORAGE</button>
                </div>
            </div>
          </div>
            );
}
});

module.exports = Popupbox;