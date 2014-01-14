define([
        'backbone',
        'marionette',
        'collections/categories',
        'hbs!templates/shared/movieSearchForm'
    ],
    function(Backbone, Marionette, Categories, template) {

        var MovieSearchForm = Backbone.Marionette.ItemView.extend({

            template: template,

            ui: {
                searchForm: '#searchForm',
                filterLabels: '.category-item',
                keywordInput: 'input[name=keyword]'
            },

            events: {
                'submit @ui.searchForm': 'onSearchFormSubmit',
                'click @ui.filterLabels': 'onClickCategoryFilter'
            },

            modelEvents: {
                'change': 'render'
            },

            initialize: function(options) {
                this.model = new Backbone.Model({
                    categoryId: null,
                    keyword: '',
                    categories: []
                });

                var categories = new Categories(),
                    self = this;
                categories.fetch().done(function(data, textStatus, jqXHR) {
                    self.model.set('categories', categories.toJSON());
                });
            },

            onSearchFormSubmit: function(event) {
                this.model.keyword = this.ui.keywordInput.val();

                this.collection.fetch({
                    data: {
                        keyword: this.model.keyword,
                        categoryId: this.model.categoryId
                    }
                });
                event.preventDefault();
            },

            onClickCategoryFilter: function(event) {
                var categoryId = $(event.target).find('input[type=radio]').val();

                this.model.categoryId = categoryId;
                this.model.keyword = this.ui.keywordInput.val();
                this.collection.fetch({
                    data: {
                        keyword: this.model.keyword,
                        categoryId: this.model.categoryId
                    }
                });
            }
        });

        return MovieSearchForm;
    });