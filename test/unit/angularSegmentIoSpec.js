'use strict';

describe('Segment IO', function () {
	var apiKey = 'a4ik8ungfs', // Real API key but fake project
		event = 'test',
		property = {foo:'bar'};

	beforeEach(module('segmentio'));

	it('should queue when not initialized', inject(function ($window, segmentio) {
		expect($window.analytics.initialized).not.toBeDefined();
		segmentio.track(event, property);
		expect($window.analytics.length).toEqual(1);
	}));

	it('should call API when initialized', inject(function ($window, segmentio) {
		$window.analytics.initialized = true;
		$window.analytics.track = jasmine.createSpy('analytics.track');
		segmentio.track(event, property);
		expect($window.analytics.track).toHaveBeenCalledWith(event, property);
	}));

	it('should have a identify method after loading', inject(function (segmentio) {
		expect(segmentio.identify).toBeDefined();
	}));

	it('should have a track method after loading', inject(function (segmentio) {
		expect(segmentio.track).toBeDefined();
	}));

	it('should have a trackLink method after loading', inject(function (segmentio) {
		expect(segmentio.trackLink).toBeDefined();
	}));

	it('should have a trackForm method after loading', inject(function (segmentio) {
		expect(segmentio.trackForm).toBeDefined();
	}));

	it('should have a trackSubmit method after loading', inject(function (segmentio) {
		expect(segmentio.trackSubmit).toBeDefined();
	}));

	it('should have a page method after loading', inject(function (segmentio) {
		expect(segmentio.page).toBeDefined();
	}));

	it('should have a pageview method after loading', inject(function (segmentio) {
		expect(segmentio.pageview).toBeDefined();
	}));

	it('should have a ab method after loading', inject(function (segmentio) {
		expect(segmentio.ab).toBeDefined();
	}));

	it('should have a alias method after loading', inject(function (segmentio) {
		expect(segmentio.alias).toBeDefined();
	}));

	it('should have a group method after loading', inject(function (segmentio) {
		expect(segmentio.group).toBeDefined();
	}));

	it('should listen to $viewContentLoaded', inject(function (segmentio, $rootScope) {
		spyOn(segmentio, "pageview");
		$rootScope.$broadcast('$viewContentLoaded');
		expect(segmentio.pageview).toHaveBeenCalled();
	}));

	it('should load the API when called with api key', inject(function ($window, segmentio) {
		segmentio.load(apiKey);

		waitsFor(function() {
      		return $window.analytics.initialized == true;
    	}, "Segmentio never loaded", 10000);

    	runs(function () {
    		expect($window.analytics).toBeDefined();
			expect($window.analytics.initialized).toBeTruthy();
			// Unload
			$window.analytics = null;
    	});
	}));
});
