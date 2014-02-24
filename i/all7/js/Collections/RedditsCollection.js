var Backbone = require('Backbone'),
    RedditModel = require('RedditModel');

var RedditCollection = Backbone.Collection.extend({
    model: RedditModel,
    url: 'http://www.reddit.com/r/kittens.json',
    parse: function(response) {
        return response.data.children;
    }
});

module.exports = RedditCollection;
