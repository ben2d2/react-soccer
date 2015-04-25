var React   = require('react');
var levels  = require('./levelsList');
var dates   = require('./datesList');
var fields  = require('./fieldsList');
var times   = require('./timesList');
var games   = require('./gamesList');

var LevelsList = require('./Levels');

var Schedule = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.setState({data: groupedData(games)})
  },
  render: function() {
    return (
      <div className="games">
        <LevelsList data={this.state.data} />
      </div>
    );
  }
});

function buildHash(groups, keysArray, key){
  return Object.keys(groups).map( function( group )
  {
    return { key: keysArray[group], value: groups[group] };
  })
};

function groupBy( array , attr, keysArray, key )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = attr(o);
    groups[group] = groups[group] || [];
    groups[group].push( o );
  });
  return buildHash(groups, keysArray, key);
};

function groupedData(data) {
  var groupedByLevel = groupBy(data, function(item)
  {
    return item.level;
  }, levels, "level");
  var groupedByLevelAndDate = groupedByLevel.map( function(object) {
    var datesGroup = groupBy(object.value, function(item){
      return item.date;
    }, dates, "date");
    return {
      level: object.key,
      dates: datesGroup
    }
  });
  var groupedByLevelAndDateAndField = groupedByLevelAndDate.map( function(object) {
    var groupedByDate = object.dates.map( function(o) {
      var groupedByField = groupBy(o.value, function(item) {
        return item.played_at;
      }, fields, "field");
      var groupedByFieldWithKeys = groupedByField.map( function(field) {
        return {
          field: field.key,
          games: field.value
        }
      });
      return {
        date: o.key,
        fields: groupedByFieldWithKeys
      }
    });
    return {
      level: object.level,
      dates: groupedByDate
    }
  });
  return groupedByLevelAndDateAndField;
};

module.exports = Schedule;
