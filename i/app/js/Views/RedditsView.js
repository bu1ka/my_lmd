var RedditsView = Backbone.View.extend({
    el: 'section#main',
    initialize: function() {
        this.collection.on('add', this.addReddit, this);
        this.collection.fetch();
    },
    addReddit: function(reddit) {
        this.$el.append(new RedditView(reddit))
    }
});









