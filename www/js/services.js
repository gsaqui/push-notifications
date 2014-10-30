angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Games', ['$http', function($http) {
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
                
        },
        get:function(id){
          var Game = Parse.Object.extend("Game");
          var query = new Parse.Query(Game);
          
          return query.get(id)
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
}])

.factory('UserAnswers', ['$http',function($http) {
  return {
      getAllForGameId: function(gameId){
          var UserAnswers = Parse.Object.extend("UserAnswers");
          var query = new Parse.Query(UserAnswers)
          query.equalTo("gameId", gameId);
          return query.find();
      },
      deleteAllForQuestionIdAndUserIdAndGameId: function(questionId, userId, gameId){
        var UserAnswers = Parse.Object.extend("UserAnswers");
          var query = new Parse.Query(UserAnswers)
          query.equalTo("gameId", gameId);
          query.equalTo("questionId", questionId);
          query.equalTo('userId', userId);
          var promise = query.find();
          promise.then(function(data){ 
            console.log('found some data', data.length)
            angular.forEach(data,function(answer){
              console.log(answer);
              answer.destroy();
            })
          });
          return promise;
      }
  }
}])
