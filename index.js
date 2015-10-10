var path = require('path');
var program = require('commander');
var config = require('./config');
var templates = require('./lib/templates');
var fs = require('fs-extra');
var swig = require('swig');

program
	.version(config.pkg.version)
	.option('-c, --code <code>', 'Code block to insert into template.')
	.option('-a, --amend <name>', 'Amend target for partial templates')
	.option('-s, --safe <name>', 'Safe identifier for the template object.')
	.option('-r, --render <name>', 'Template `render` option.')
	.option('-m, --method <method>', 'HTTP method to apply in the operation');

program
	.command('make <template> <name> [destination]')
	.action(function (template, name, destination) {
		var t = templates.getTemplate(template);
		destination = destination || t.defaultPath;
		destination = path.resolve(destination);
		t.generate({}, function (err, text) {
			if (err) {
				return console.error(err);
			}

			var rendered = swig.render(text, {
				locals: {
					name: name,
					safeName: program.safe || null,
					render: program.render || false,
					method: program.method || 'get',
					code: program.code || ''
				}
			});

			var newPath = path.join(destination, name.replace(/\W/g, '') + t.ext);
			console.log('new path: ', newPath);
			var fn = fs.outputFile;
			if (t.append) {
				fn = fs.appendFile;
				newPath = path.join(destination, program.amend + t.ext);
			}

			fn(newPath, rendered, function (err) {
				if (err) {
					console.error('Error outputting file `', newPath, '`.');
					return console.error(err);
				}

				console.log('Ok.');
			});
		});
	});

console.log();
program.parse(process.argv);