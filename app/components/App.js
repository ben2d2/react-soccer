var React = require('react');

var Schedule = require('./Schedule');

var App = React.createClass({

  render: function() {
    return (
      <Schedule url='games.json' pollInterval={200000}/>
    );
  }

});

module.exports = App;
