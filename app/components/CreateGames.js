var React = require('react');
var _     = require('lodash');

var Teams = [
  {"id": "11", "group": 1, "name": "Craig","color": "teal"},
  {"id": "12", "group": 1, "name": "Dickson","color": "purple"},
  {"id": "13", "group": 1, "name": "Holleman","color": "pink"},
  {"id": "14", "group": 1, "name": "McInstosh","color": "maroon"},
  {"id": "15", "group": 1, "name": "Miller","color": "orange"},
  {"id": "16", "group": 1, "name": "Brandau","color": "forestgreen"},
  {"id": "17", "group": 1, "name": "The Rathe's","color": "red"},
  {"id": "18", "group": 1, "name": "McGuigan","color": "white"},
  {"id": "19", "group": 1, "name": "Corts/Hernandez","color": "green"},
  {"id": "110", "group": 1, "name": "Frericks","color": "royalblue"},
  {"id": "111", "group": 1, "name": "Lee/Adair","color": "grey"},
  {"id": "112", "group": 1, "name": "Schickling/Perry","color": "skyblue"},
  {"id": "113", "group": 1, "name": "Stanley","color": "gold"},
  {"id": "114", "group": 1, "name": "Amden/Martin","color": "pink"},
  {"id": "115", "group": 1, "name": "Willingham","color": "black"},
  {"id": "116", "group": 1, "name": "Schirm/Meyer","color": "navy"},
  {"id": "21", "group": 2, "name": "Pittman","color": "green"},
  {"id": "22", "group": 2, "name": "Frericks","color": "pink"},
  {"id": "23", "group": 2, "name": "Calderon","color": "navy"},
  {"id": "24", "group": 2, "name": "Larkin","color": "white"},
  {"id": "25", "group": 2, "name": "Holleman","color": "orange"},
  {"id": "26", "group": 2, "name": "Austin","color": "purple"},
  {"id": "27", "group": 2, "name": "Calderon","color": "black"},
  {"id": "28", "group": 2, "name": "Dickson","color": "grey"},
  {"id": "29", "group": 2, "name": "Fleming","color": "gold"},
  {"id": "210", "group": 2, "name": "Nichols","color": "red"},
  {"id": "31",  "group": 3,"name": "King", "color": "red"},
  {"id": "32",  "group": 3,"name": "Gaylon", "color": "pink"},
  {"id": "33",  "group": 3,"name": "McGuire", "color": "royalblue"},
  {"id": "34",  "group": 3,"name": "Bridges", "color": "grey"},
  {"id": "35",  "group": 3,"name": "Welborn", "color": "black"},
  {"id": "36",  "group": 3,"name": "Porter", "color": "pink"},
  {"id": "37",  "group": 3,"name": "Porter", "color": "white"},
  {"id": "38",  "group": 3,"name": "Theobald/Little", "color": "linen"},
  {"id": "39",  "group": 3,"name": "Cowles", "color": "teal"},
  {"id": "310", "group": 3, "name": "Holstein", "color": "orange"},
  {"id": "311", "group": 3, "name": "Cherry", "color": "white"},
  {"id": "312", "group": 3, "name": "Brock", "color": "skyblue"},
  {"id": "313", "group": 3, "name": "Schultz", "color": "gold"},
  {"id": "314", "group": 3, "name": "McEvoy", "color": "purple"},
  {"id": "315", "group": 3, "name": "Crowell", "color": "forestgreen"},
  {"id": "316", "group": 3, "name": "Gibbs", "color": "forestgreen"},
  {"id": "317", "group": 3, "name": "Nickoloff", "color": "royalblue"},
  {"id": "318", "group": 3, "name": "Frost", "color": "white"},
  {"id": "319", "group": 3, "name": "Weaver", "color": "navy"},
  {"id": "320", "group": 3, "name": "Franke", "color": "red"},
  {"id": "321", "group": 3, "name": "McDaniel", "color": "black"},
  {"id": "41", "group": 4, "name": "Johns","color": "skyblue"},
  {"id": "42", "group": 4, "name": "Ashworth","color": "teal"},
  {"id": "43", "group": 4, "name": "Wrubel","color": "red"},
  {"id": "44", "group": 4, "name": "Douglas","color": "navy"},
  {"id": "45", "group": 4, "name": "Edwards","color": "pink"},
  {"id": "46", "group": 4, "name": "Laufer","color": "white"},
  {"id": "47", "group": 4, "name": "Mitchell","color": "forestgreen"},
  {"id": "48", "group": 4, "name": "Larkin/Puryear","color": "orange"},
  {"id": "49", "group": 4, "name": "Thorton","color": "purple"},
  {"id": "410", "group": 4, "name": "Roark/Fitzwater","color": "gold"},
  {"id": "411", "group": 4, "name": "Burton","color": "pink"},
  {"id": "412", "group": 4, "name": "Baxter","color": "maroon"},
  {"id": "413", "group": 4, "name": "Pery","color": "royalblue"},
  {"id": "414", "group": 4, "name": "Wengraf","color": "maroon"},
  {"id": "415", "group": 4, "name": "Corby","color": "black"},
  {"id": "416", "group": 4, "name": "Watson","color": "gray"},
  {"id": "417", "group": 4, "name": "Wagener","color": "navy"},
  {"id": "51", "group": 5, "name": "Pensinger", "color": "royalblue"},
  {"id": "52", "group": 5, "name": "Drumm", "color": "teal"},
  {"id": "53", "group": 5, "name": "Hudson/Price", "color": "skyblue"},
  {"id": "54", "group": 5, "name": "Thornton", "color": "purple"},
  {"id": "55", "group": 5, "name": "TJ Luchsen", "color": "grey"},
  {"id": "56", "group": 5, "name": "Reisner/Huseby", "color": "royalblue"}
];

var CreateGames = React.createClass({
  render: function() {
    return (
      <form className="createGamesForm">
        <HomeTeamOptions/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var HomeTeamOptions = React.createClass({
  render: function() {
    var teams = _.where(Teams, { 'group': 1 })
    var teamNodes = teams.map(function(team, index) {
      return (
        <option value={team.id}>{team.name}</option>
      );
    });
    return (
      <label>Home Team</label>
      <select id="home">
        {teamNodes}
      </select>
    );
  }
});
var AwayTeamOptions = React.createClass({
  render: function() {
    var teams = _.where(Teams, { 'group': 1 })
    var teamNodes = teams.map(function(team, index) {
      return (
        <option value={team.id}>{team.name}</option>
      );
    });
    return (
      <label>Home Team</label>
      <select id="away">
        {teamNodes}
      </select>
    );
  }
});

module.exports = CreateGames;
