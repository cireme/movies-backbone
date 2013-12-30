define([
	'backbone',
	'marionette',
	'hbs!templates/category/item'
	], function(Backbone, Marionette, template) {
   
	    var CategoryItemView = Backbone.Marionette.ItemView.extend({
			template: template,
			tagName: 'label',
			className: 'btn btn-default category-item'
	    });
	   
	    return CategoryItemView;
});