var _ = require('lodash');
var angular = require('angular');

var app = angular.module('chasingshadows', []);

app.factory('playerModel', require('./models/player'));
app.factory('gameObjects', require('./models/gameObjects'));

app.controller('rootController', require("./controllers/root"));
app.controller('mapController', require("./controllers/map"));
