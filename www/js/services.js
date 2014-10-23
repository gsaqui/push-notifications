angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', ['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    { id: 0, name: 'Vancouver Canucks vs LA Kings', homeTeam: 'LA Kings', awayTeam: 'Vancouver Canucks' },
    { id: 1, name: 'Edmonton Oilers vs Calgary Flames', homeTeam: 'Edmonton Oilers', awayTeam: 'Calgary Flames' },
    { id: 2, name: 'Boston Bruins vs New York Islanders', homeTeam: 'Boston Bruins', awayTeam: 'New York Islanders' },
    { id: 3, name: 'Florida Panthers vs Detroit Red Wings', homeTeam: 'Florida Panthers', awayTeam: "Detroit Red Wings" }
  ];

  return {
        all:function(){
            return $http.get('https://api.parse.com/1/classes/Game',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Game/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
        },
        create:function(data){
            return $http.post('https://api.parse.com/1/classes/Game',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('https://api.parse.com/1/classes/Game/'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('https://api.parse.com/1/classes/Game/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
    }
}]).value('PARSE_CREDENTIALS',{
    APP_ID: '',
    REST_API_KEY:''
});
