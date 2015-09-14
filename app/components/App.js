var React = require('react');

var NavTabs = require('./NavTabs');
var Schedule = require('./Schedule');
var teams   = require('./teams');

var id = window.location.search.match(/id=([^&]*)/);
var group = window.location.search.match(/group=([^&]*)/);


var App = React.createClass({
  render: function() {
    if (id) {
      var team = _.findWhere(teams, {id: id[1]});
      return (
        <div>
          <a className="return-to-all" href="/">Return to all</a>
          <h2 className="team-name"><span className="team-color" style={{backgroundColor: team.color}}></span>{team.name}</h2>
          <Schedule teamId={id ? id[1] : ""}  teamGroup={group ? group[1] : ""}/>
        </div>
      );
    } else {
      return (
        <div>
          <NavTabs/>
          <Schedule teamId={id ? id[1] : ""}/>
        </div>
      );
    }
  }
});

module.exports = App;
