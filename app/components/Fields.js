var React = require('react');

var GamesList = require('./Games');

var fields  = require('./fieldsList');

var Fields = React.createClass({
  render: function() {
    return (
      <div className="fieldRow">
        Field #{fields.indexOf(this.props.data.field, 0) + 1} <span className="field-description">{this.props.data.field}</span>
        <GamesList data={this.props.data.games} />
      </div>
    );
  }
});

var FieldsList = React.createClass({
  render: function() {
    var fieldNodes = this.props.data.map(function(field, index) {
      return (
        <Fields data={field} key={index}/>
      );
    });
    return (
      <div className="fieldList">
        {fieldNodes}
      </div>
    );
  }
});

module.exports = FieldsList;
