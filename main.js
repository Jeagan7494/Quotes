angular.module("myApp", []);

angular.module("myApp").controller('mainController', ['$scope', function($scope) {

		$scope.author = ''
		$scope.quote = ''
		$scope.rating = ''

		$scope.quotes = [
		{
			author: "Jessey Eagan",
			quote: "What up?",
			stars : [{rated : false}, {rated : false}, {rated : false}, {rated : false}, {rated : false} ],
			rating: 4
		},
		{
			author: "Jessey Eagan",
			quote: "What up?",
			stars : [{rated : false}, {rated : false}, {rated : false}, {rated : false}, {rated : false} ],
			rating: 2
		},
		{
			author: "Jessey Eagan",
			quote: "How am I going to learn all of this?",
			stars : [{rated : false}, {rated : false}, {rated : false}, {rated : false}, {rated : false} ],
			rating: 4
		},
		{
			author: "Joanie Smeester",
			quote: "You can always get a job at a coffee shop.",
			stars : [{rated : false}, {rated : false}, {rated : false}, {rated : false}, {rated : false} ],
			rating: 0
		},

		]

		$scope.removeQuote = function(index) {
			console.log(index)
			$scope.quotes.splice(index, 1)
		}
		$scope.submitQuote = function() {
			var myObj = {}
			myObj.author = $scope.author
			myObj.quote = $scope.quote
			myObj.rating = $scope.rating
			myObj.stars = [{rated : false}, {rated : false}, {rated : false}, {rated : false}, {rated : false} ]
			$scope.quotes.push( myObj )
			$scope.author = ''
			$scope.quote = ''
			$scope.rating = ''
		}
		$scope.rateIt = function(index, quoteIndex) {
			console.log("INDEX", $scope.quotes[quoteIndex])
			for(var i = 0; i < index; i++) {
				$scope.quotes[quoteIndex]['stars'][index]['rated'] = true;

			}

		}

		$scope.getRandomQuote = function() {
				$scope.randomQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
		}

		// $scope.starsArray = ["★","★ ","★  ","★   ","★    "]








}])
