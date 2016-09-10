var glob = require('glob');
var path = require('path');
var localeManager = {};
var files = glob.sync(__dirname + '/../../locales/*.js');

glob.sync(__dirname + '/../../locales/*.js').map(function (file) {
	var responses = require(path.resolve(file));
	localeManager[responses.locale] = responses;
});

module.exports = localeManager;