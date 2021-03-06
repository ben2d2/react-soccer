var React = require('react');

var DatesList = require('./Dates');

var Levels = React.createClass({
  render: function() {
    return (
      <div className="levelRow">
        <DatesList dates={this.props.level.dates} />
      </div>
    );
  }
});

var LevelsList = React.createClass({
  render: function() {
    var group = this.props.group;
    var levelNodes = this.props.levels.map(function(level, index) {
      var klass = (level.level == "threefour" || level.level == group) ? "tab-pane active" : "tab-pane";
      return (
        <div id={level.level} role="tabpanel" className={klass}>
          <Levels level={level} key={index}/>
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
