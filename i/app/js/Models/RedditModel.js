var Backbone = require('Backbone');

var RedditModel = Backbone.Model.extend({
    defaults: {
        'foo': 'bar'
    }
});

module.exports = RedditModel;
