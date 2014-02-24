var Backbone = require('Backbone'),
    RedditView = require('RedditView');

var RedditsView = Backbone.View.extend({
    el: 'section#main',
    initialize: function() {
        this.collection.on('add', this.addReddit, this);
        this.collection.fetch();
    },
    addReddit: function(reddit) {
        var newView = new RedditView({model: reddit});
        this.$el.append(newView.el);
    }
});

module.exports = RedditsView;








