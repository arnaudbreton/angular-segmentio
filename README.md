# Tracking Events and Pageviews with Segment.io

## How?

follow these step:

- Add the service to your angular js app module:

	``var app = angular.module('myapp', ['segmentio']) {
		...
	});``


- Now just have analytics to be injected in your contorller.

	``function myCtrl($rootScope, $scope, $http, analytics) {
	    ...
	};``
