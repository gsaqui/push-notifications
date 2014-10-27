angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', ['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS) {
  // Might use a resource here that returns a JSON array
  

  // Some fake testing data
var question1 = {    
    question: "Will the Kings kill this penalty",
    answers: [{
      id: '321',
      title: "Yes"
    },
    {
      id: '99',
      title: "No"
    }]
  }

  var question2 = {    
    question: "Total Goals after 1st period",
    answers: [{
      title: "+1.5"
    },
    {
      title: "-1.5"
    }]
  }
  var question3 = {    
    question: "Total Goals after 2st period",
    answers: [{
      title: "+2.5"
    },
    {
      title: "-2.5"
    }]
  }
  var question4 = {    
    question: "Total Goals after 3st period",
    answers: [{
      title: "+3.5"
    },
    {
      title: "-3.5"
    }]
  }


  var games = [
    { name: 'Vancouver Canucks vs LA Kings', homeTeam: 'LA Kings', awayTeam: 'Vancouver Canucks', questions:[question2, question3, question4] },
    { name: 'Edmonton Oilers vs Calgary Flames', homeTeam: 'Edmonton Oilers', awayTeam: 'Calgary Flames', questions:[question2, question3, question4] },
    { name: 'Boston Bruins vs New York Islanders', homeTeam: 'Boston Bruins', awayTeam: 'New York Islanders', questions:[question2, question3, question4] },
    { name: 'Florida Panthers vs Detroit Red Wings', homeTeam: 'Florida Panthers', awayTeam: "Detroit Red Wings", questions:[question2, question3, question4] }
  ];

  
  return {
        all:function(){


                var Game = Parse.Object.extend("Game");
                var query = new Parse.Query(Game)
                query.notEqualTo("awayTeam", "test");
                return query.find();
                /*return query.find({
                success: function(results) {
                  console.log(results)
                  // Do something with the returned Parse.Object values
                  for (var i = 0; i < results.length; i++) { 
                    var object = results[i];
                    console.log(object.id + ' - ' + object.get('homeTeam'));
                  }
                },
                error: function(error) {
                  alert("Error: " + error.code + " " + error.message);
                }
              });
*/
/*
            return $http.get('https://api.parse.com/1/classes/Game',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                }
            });
*/            
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
