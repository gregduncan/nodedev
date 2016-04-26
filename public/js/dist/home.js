// https://jsfiddle.net/yjyuzh9n/17/
(function () {
  
    var App = React.createClass({displayName: "App",
        render: function () {

            return (
              React.createElement("h1", null, "React Node JS app on Azure.")
          );
        }
    });

    ReactDOM.render(
      React.createElement(App, null),
      document.getElementById('content')
    );

})(); 