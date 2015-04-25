var React = require('react');

var FieldsList = require('./Fields')

var Dates = React.createClass({
  render: function() {
    return (
      <div className="dateRow">
        <strong>{this.props.data.date}</strong>
        <FieldsList data={this.props.data.fields} />
      </div>
    );
  }
});

var DatesList = React.createClass({
  render: function() {
    var dateNodes = this.props.data.map(function(date, index) {
      return (
        <Dates data={date} key={index}/>
      );
    });
    return (
      <div className="dateList">
        {dateNodes}
      </div>
    );
  }
});

module.exports = DatesList;
