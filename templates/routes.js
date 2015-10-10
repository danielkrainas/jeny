module.exports = {
	id: 'routes',

	ext: '.js',

	defaultPath: './app/routes',

	generate: function (options, callback) {
		callback(null, 'var router = require(\'express\').Router();\n\nmodule.exports = router;\n\n');
	}
};
