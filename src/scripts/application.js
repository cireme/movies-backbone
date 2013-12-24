define([
	'backbone',
	'marionette',
	'routes/router',
	'controllers/controller'
	], function (Backbone, Marionette, Router, Controller) {

	    var App = new Marionette.Application();

    	App.addRegions({
        	navigationRegion: "#navigationContent",
        	mainRegion: "#mainContent",
        	sidebarRegion: '#sideContent'
    	});

	    App.addInitializer(function() {

			var router = new Router({
				controller: new Controller({App: App})
			});

			Backbone.history.start({
				pushState: false,
				root: '/',
				silent: true
    		});
    		
    		Backbone.history.loadUrl();
	    });

	    return App;
});