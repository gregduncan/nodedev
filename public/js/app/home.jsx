// https://jsfiddle.net/yjyuzh9n/17/
(function () {
  
    var App = React.createClass({
        render: function () {

            return (
              <h1>React Node JS app on Azure.</h1>
          );
        }
    });

    ReactDOM.render(
      <App />,
      document.getElementById('content')
    );

})(); 