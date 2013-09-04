# Tracking Events and Pageviews with Segment.io (http://segment.io)

## How-to use it?

Follow these steps:

1) Add the service to your angular js app module:

```
var app = angular.module('myapp', ['segmentio']) {
    ...
});
```


2) Now just have analytics to be injected in your controller.

```
function myCtrl($rootScope, $scope, $http, segmentio) {
    ...
};
```

3) Call any method documented here: https://segment.io/libraries/analytics.js

## How-to add it to your project?

Via Twitter Bower (http://bower.io/) 
Run ``bower install angular-segmentio`` in a terminal

## How-to build / develop it?

1) Install dependencies via npm: ``npm install``(in the project folder)

2) Run grunt: ``grunt`` or ``grunt uglify``

3) The build result is in the build directory

