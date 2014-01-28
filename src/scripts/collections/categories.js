define([
    'backbone',
    'models/category'
], function(Backbone, Category) {

    var Categories = Backbone.Collection.extend({
        url: 'http://gangofbb.bhtz.fr/api/categories',
        model: Category
    });

    return Categories;
});