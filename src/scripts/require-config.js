//
// Configuration file for requirejs.
//
require.config({
    baseUrl: '/scripts/',
    paths: {
        'jquery': 'vendors/jquery',
        'bootstrap': 'vendors/bootstrap',
        'underscore': 'vendors/underscore',
        'handlebars': 'vendors/handlebars',
        'backbone': 'vendors/backbone',
        'backbone-validation': 'vendors/backbone-validation',
        'backbone.stickit': 'vendors/backbone.stickit',
        'marionette': 'vendors/marionette',
        'hbs': 'vendors/hbs',
        'text': 'vendors/text',
        'moment': 'vendors/moment'
    },
    shim: {
        'jquery': {
            'exports': '$'
        },
        'bootstrap': ['jquery'],
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        'marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        'underscore': {
            exports: '_'
        },
        'moment': {
            exports: 'moment'
        }
    }
});