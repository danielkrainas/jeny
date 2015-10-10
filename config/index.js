var path = require('path');
var pkg = require('../package');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
	pkg: pkg,

	rootPath: rootPath,

	templates: path.join(rootPath, 'templates')
};
