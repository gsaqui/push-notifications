angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    { id: 0, name: 'Vancouver Canucks vs LA Kings' },
    { id: 1, name: 'Edmonton Oilers vs Calgary Flames' },
    { id: 2, name: 'Boston Bruins vs New York Islanders' },
    { id: 3, name: 'Florida Panthers vs Detroit Red Wings' }
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
