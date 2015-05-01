var React = require('react');

var GamesList = require('./Games');

var Fields = React.createClass({
  render: function() {
    return (
      <div className="fieldRow">
        Field <span className="field-description">{this.props.field.field}</span>
        <GamesList games={this.props.field.games} />
      </div>
    );
  }
});

var FieldsList = React.createClass({
  render: function() {
    var fieldNodes = this.props.fields.map(function(field, index) {
      return (
        <Fields field={field} key={index}/>
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
