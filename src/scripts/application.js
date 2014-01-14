define([
    'marionette',
    'routes/router',
    'controllers/controller',
    'models/user',
], function(Marionette, Router, Controller, User) {

    var App = new Marionette.Application();

    App.addRegions({
        navigationRegion: "#navigationContent",
        mainRegion: "#mainContent",
        sidebarRegion: '#sideContent'
    });

    App.addInitializer(function() {

        var user = new User();
        user.fetch({

            success: function() {

                var router = new Router({
                    controller: new Controller({
                        App: App,
                        user: user
                    })
                });

                Backbone.history.start({
                    pushState: false,
                    root: '/',
                    silent: true
                });

                Backbone.history.loadUrl();
            },

            error: function() {
                alert('error during retrieve user informations, you maybe have to clear your browser cache !!!');
            }
        });

    });

    return App;
});