var RedditView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(redditTemplate),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

