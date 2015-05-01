var React      = require('react');
var _          = require('lodash');

var LevelsList = require('./Levels');

function groupedData(data) {
  var grouped = _.map(_.groupBy(data, "level"), function(levelsArray, levelsKey){
    var groupedByDate = _.map(_.groupBy(levelsArray, "date"), function(datesArray, datesKey){
      var groupedByField = _.map(_.groupBy(datesArray, "played_at"), function(fieldsArray, fieldsKey){
        return { field: fieldsKey, games: fieldsArray }
      });
      return { date: datesKey, fields: groupedByField }
    });
    return { level: levelsKey, dates: groupedByDate }
  });
  return grouped;
};

var Schedule = React.createClass({
  loadScheduleFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: groupedData(data)});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadScheduleFromServer();
    setInterval(this.loadScheduleFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="games">
        <LevelsList levels={this.state.data} />
      </div>
    );
  }
});

module.exports = Schedule;
