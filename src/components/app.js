var React = require("react");
var ReactDOM = require("react-dom");


var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h1>My Application</h1>
            </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.querySelector(".render-target")
);