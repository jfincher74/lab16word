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

  $scope.randomArray = [];

  $scope.showWord = function(places){
    var randomCity = $scope.places[Math.floor(Math.random() * $scope.places.length)];
    console.log(randomCity);
    $scope.randomArray.push(randomCity);
    console.log($scope.randomArray);
};
});
