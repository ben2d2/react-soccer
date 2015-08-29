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
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    var todayFoo = mm+'/'+dd+'/'+yyyy;

    var dateNodes = this.props.dates.map(function(date, index) {
      if ( date.date >= todayFoo) {
        return (
          <Dates date={date} key={index}/>
        );
      }
    });
    return (
      <div className="dateList">
        {dateNodes}
      </div>
    );
  }
});

module.exports = DatesList;
