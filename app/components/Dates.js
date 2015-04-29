var React = require('react');

var FieldsList = require('./Fields')

var Dates = React.createClass({
  render: function() {
    return (
      <div className="dateRow">
        <strong>{this.props.date.date}</strong>
        <FieldsList fields={this.props.date.fields} />
      </div>
    );
  }
});

var DatesList = React.createClass({
  render: function() {
    var dateNodes = this.props.dates.map(function(date, index) {
      return (
        <Dates date={date} key={index}/>
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
