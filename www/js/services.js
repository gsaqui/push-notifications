angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    { id: 0, name: 'Vancouver Canucks vs LA Kings', homeTeam: 'LA Kings', awayTeam: 'Vancouver Canucks' },
    { id: 1, name: 'Edmonton Oilers vs Calgary Flames', homeTeam: 'Edmonton Oilers', awayTeam: 'Calgary Flames' },
    { id: 2, name: 'Boston Bruins vs New York Islanders', homeTeam: 'Boston Bruins', awayTeam: 'New York Islanders' },
    { id: 3, name: 'Florida Panthers vs Detroit Red Wings', homeTeam: 'Florida Panthers', awayTeam: "Detroit Red Wings" }
  ];

  return {
    all: function() {
      return games;
    },
    get: function(gameId) {
      // Simple index lookup
      return games[gameId];
    }
  }
});
