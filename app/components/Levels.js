var React = require('react');

var DatesList = require('./Dates');

var Levels = React.createClass({
  render: function() {
    return (
      <div className="levelRow">
        <DatesList data={this.props.data.dates} />
      </div>
    );
  }
});

var LevelsList = React.createClass({
  render: function() {
    var levelNodes = this.props.data.map(function(level, index) {
      var klass = level.level == "threefour" ? "tab-pane active" : "tab-pane";
      return (
        <div id={level.level} role="tabpanel" className={klass}>
          <Levels data={level} key={index}/>
        </div>
      );
    });
    return (
      <div className="levelList tab-content">
        {levelNodes}
      </div>
    );
  }
});

module.exports = LevelsList;
