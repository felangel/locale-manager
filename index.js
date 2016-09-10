var glob = require('glob');
var path = require('path');
var localeManager = {};

glob.sync(__dirname + '/../../locales/*.js').map(function (file) {
	var config = require(path.resolve(file));
	localeManager[config.locale] = config;
});

module.exports = localeManager;