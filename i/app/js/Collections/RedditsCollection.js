var RedditCollection = Backbone.Collection.extend({
    model: RedditModel,
    url: 'www.reddit.com/r/sex/about.json'
});

module.exports = RedditCollection;
