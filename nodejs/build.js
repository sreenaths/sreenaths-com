'use strict';

var fs = require('fs-extra');
var handlebars = require('handlebars');
var minify = require('html-minifier').minify;

var importHelper = require('handlebars-helper-import')(handlebars);

const DIST = "./dist"

handlebars.registerHelper('import', importHelper);

function buildFile(sourceFile, targetFile, context) {
	var template = handlebars.compile(`{{import '${sourceFile}'}}`);
	fs.writeFile(targetFile, (template(context)), function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	});
}

//modules.export = function () {

	// Clean
	fs.removeSync(DIST);

	// Copy assets
	fs.copySync("./assets", DIST);

	// Render HTML
	var projectData = fs.readJsonSync("./data/project_data.json");
	projectData.projects.forEach(function (project) {
		project._tags = project.tags.map(function (tagName) {
			return projectData.tags[tagName];
		});
	});
	buildFile("templates/index.hbs", "dist/index", {});
	buildFile("templates/about.hbs", "dist/about", {});
	buildFile("templates/contacts.hbs", "dist/contacts", {});
	buildFile("templates/projects.hbs", "dist/projects", projectData);


//};
