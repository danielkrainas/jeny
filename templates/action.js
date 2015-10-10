module.exports = {
	id: 'action',

	append: true,

	ext: '.js',

	defaultPath: './app/controllers',

	generate: function (options, callback) {
		callback(null, '\nexports.{{name}} = function (req, res, next) {\n    {% if render %}res.render(\'{{render}}\');{% else %}res.status(200).end();{% endif %} \n};\n');
	}
}