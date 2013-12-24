define([
	'backbone',
    'marionette'
	], function(Backbone, Marionette){
	
	var Router = Backbone.Marionette.AppRouter.extend({

        /**
         * routes handler
         */
        appRoutes: {
            ""       : "home",
            "movies/:id"       : "showMovie"
        }
    });

	return Router;
});