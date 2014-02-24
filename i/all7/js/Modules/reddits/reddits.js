var Backbone = require('Backbone'),
    _ = require('lodash'),
    RedditsCollection = require('RedditsCollection'),
    App = require('RedditsView');

function reddits() {
    new App({ collection: new RedditsCollection() });
}

module.exports = reddits;
