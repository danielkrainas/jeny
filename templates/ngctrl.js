
exports.id = 'ngctrl';

exports.ext = '.js';

exports.defaultPath = './public/app/ctrl';

var template = ''
	+ 'angular.module(\'app.controllers\')\n\n'
	+ '.controller(\'{% if safeName %}{{safeName}}{% else %}{{name}}{% endif %}\', function ($scope) {\n'
	+ '    \n'
	+ '});\n';

exports.generate = function (options, callback) {
	callback(null, template);
};
