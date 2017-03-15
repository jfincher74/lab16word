var app = angular.module("wordModule", []);



app.controller("wordController", function($scope){
  $scope.places = [
  	"Detroit", "Denver", "Atlanta", "Dallas", "Birmingham", "Houston",
  	"San Francisco", "Los Angelas", "Phenoix", "Seattle", "Portland",
  	"Kansas City", "Saint Louis", "New Orleans", "Chicago", "Indianapolis",
  	"Lexington", "Louisville", "New York", "Memphis", "Jackson", "Madison",
  	"Minneapolis", "Savnnah", "Tampa Bay", "Miami", "Las Vegas", "Billings",
  	"Baltimore", "Philedelphia", "Buffalo", "Raleigh", "Charleston", "Nashville",
  	"Cincinnati", "Cleveland", "Pittsburgh", "Providence", "Austin", "Washington D.C.", "Huntsville"
  ];

  $scope.showWord = function(places){

  var rand = $scope.places[Math.floor(Math.random() * $scope.places.length)];

  console.log(rand);
};
});

  // $scope.showWord = function(places, $index) {
  //   var city = $scope.places.splice($index, 1);
  //   console.log(city);
  // }

  // $scope.showWord = function(){
  //   $index = Math.random() * [40]
  // }


// $scope.getNumber = function() {
//              $scope.num = ((Math.random() * [40]));
//          };


// $scope.removeItem = function(letsRemove, $index){
//   console.log(letsRemove);
//   console.log($index);
// var x =$scope.items.splice($index, 1);
// $scope.completed.push(x[0]);
// };

//
// app.controller('inputCtrl', function($scope, redditFactory){
//   $scope.sendName = function(subName) {
//     console.log(subName);

// <button type="button" ng-click = "sendName(subredditName)">Search For A Subreddit</button>
