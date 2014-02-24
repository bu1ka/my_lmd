var Backbone = require('Backbone'),
    RedditModel = require('RedditModel');

var RedditCollection = Backbone.Collection.extend({
    model: RedditModel,
    url: 'http://www.reddit.com/r/sex/about.json',
    parse: function(response) {
        console.log("8: response = ", response);
        return response.data;
    }
});

module.exports = RedditCollection;
