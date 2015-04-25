var React = require('react');

var teams   = require('./teams');
var times   = require('./timesList');

var Games = React.createClass({
  render: function() {
    var awayTeam = findById(teams,this.props.data.away);
    var homeTeam = findById(teams,this.props.data.home);
    return (
      <div className="gameRow row">
        <div className="col-lg-2 time">{times[this.props.data.start_at]}</div>
        <div className="col-lg-5"><span className="team-color" style={{backgroundColor: awayTeam.color}}></span>{awayTeam.name}</div>
        <div className="col-lg-5"><span className="team-color" style={{backgroundColor: homeTeam.color}}></span>{homeTeam.name}</div>
      </div>
    );
  }
});

var GamesList = React.createClass({
  render: function() {
    var gameNodes = this.props.data.map(function(game, index) {
      return (
        <Games data={game} key={index}/>
      );
    });
    return (
      <div className="gameList">
        {gameNodes}
      </div>
    );
  }
});

function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

module.exports = GamesList;
