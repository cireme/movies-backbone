require([
    'jquery',
    'backbone',
    'marionette',
    'bootstrap',
    'application',
    'helpers/dateHelpers'
], function($, Backbone, Marionette, bootstrap, App) {

    //
    // Start marionette application when jQuery DOM Ready callback.
    //
    $(function() {
        App.start();
    });
});