var fse = require('fs-extra');
var path = require('path');
var config = require('../config');

var templates = {};

fse.readdirSync(config.templates).forEach(function (file) {
	var fullPath = path.join(config.templates, file);
	var stat = fse.statSync(fullPath);
	if (stat.isFile() && path.extname(file) === '.js') {
		var t = require(fullPath);
		templates[t.id] = t;
	}
});

exports.getTemplate = function (id) {
	return templates[id];
};
