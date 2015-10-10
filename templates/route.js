module.exports = {
	id: 'route',

	ext: '.js',

	append: true,

	defaultPath: './app/routes',

	generate: function (options, callback) {
		callback(null, 'router.{{method}}(\'{% if safeName %}{{safeName}}{% else %}{{name}}{% endif %}\', {{code}});\n');
	}
};
