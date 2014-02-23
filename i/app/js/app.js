var $ = require('jquery'),
    Backbone = require('Backbone'),
    _ = require('lodash'),
    RedditsCollection = require('RedditsCollection'),
    App = require('RedditsView');


$(function() {
    new App({ collection: new RedditsCollection() });
});

