var React      = require('react');
var _          = require('lodash');
var data       = require('./games_list');

var LevelsList = require('./Levels');

function filteredData(data, teamId) {
  var filtered = _.where(data, { "away": teamId }).concat(
    _.where(data, { "home": teamId })
  );
  return _.sortByOrder(filtered, ['date'], ['asc']);
};

function groupedData(data, teamId) {
  if (teamId) {
    var data = filteredData(data, teamId)
  } else {
    var data = data;
  }

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
  render: function() {
    return (
      <div className="games">
        <LevelsList levels={groupedData(data, this.props.teamId)} group={this.props.teamGroup} />
      </div>
    );
  }
});

module.exports = Schedule;
