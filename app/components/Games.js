var React = require('react');

var teams   = require('./teams');

var Games = React.createClass({
  render: function() {
    var awayTeam = _.findWhere(teams, {id: this.props.game.away});
    var homeTeam = _.findWhere(teams, {id: this.props.game.home});
    var awayTeamLink = "?id="+ awayTeam.id
    var homeTeamLink = "?id="+homeTeam.id
    return (
      <div className="gameRow row">
        <div className="col-lg-2 time">{this.props.game.start_at}</div>
        <a href={awayTeamLink}><div className="col-lg-5"><span className="team-color" style={{backgroundColor: awayTeam.color}}></span>{awayTeam.name}</div></a>
        <a href={homeTeamLink}><div className="col-lg-5"><span className="team-color" style={{backgroundColor: homeTeam.color}}></span>{homeTeam.name}</div></a>
      </div>
    );
  }
});

var GamesList = React.createClass({
  render: function() {
    var gameNodes = this.props.games.map(function(game, index) {
      return (
        <Games game={game} key={index}/>
      );
    });
    return (
      <div className="gameList">
        {gameNodes}
      </div>
    );
  }
});

module.exports = GamesList;
