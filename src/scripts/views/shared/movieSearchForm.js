define([
	'backbone',
	'marionette',
	'collections/categories',
	'views/category/categoryItemView',
	'hbs!templates/shared/movieSearchForm'
	], function(Backbone, Marionette, Categories, CategoryItemView, template) {
   
    var MovieSearchForm = Backbone.Marionette.CompositeView.extend({

    	initialize: function (options) {
    		this.vent = options.vent;
    		this.filterModel = {categoryId : null, keyword: null};
    		this.collection = new Categories();
			this.collection.fetch();
    	},

		template: template,
		itemView: CategoryItemView,
		itemViewContainer: '.category-list',

		ui:{
      		searchForm: '#searchForm',
      		filterLabels: '.category-item',
      		keywordInput: 'input[name=keyword]'
      	},

      	events:{
      		'submit @ui.searchForm': 'onSearchFormSubmit',
      		'click @ui.filterLabels': 'onClickCategoryFilter'
      	},


        onSearchFormSubmit: function (e) {
			this.filterModel.keyword = this.ui.keywordInput.val();
			this.vent.trigger('movieFilter', this.filterModel);

        	return false;
        },

        onClickCategoryFilter: function (e) {
        	var categoryId = $(e.target).find('input[type=radio]').val();

        	this.filterModel.categoryId = categoryId;
        	this.filterModel.keyword = this.ui.keywordInput.val();
        	this.vent.trigger('movieFilter', this.filterModel);
        },
    });
   
    return MovieSearchForm;
});