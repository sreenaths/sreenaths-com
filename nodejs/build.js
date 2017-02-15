'use strict';

const DIST = "./dist"

var less = require('less');
var fs = require('fs-extra');
var handlebars = require('handlebars');

//var htmlminify = function (str) {
//	return str;
//
//	// Remove newlines
//	str = str.replace(/[\r\n]/g, '');
//
//	// Remove comments
//	str = str.replace(/<!--*-->/g,'');
//
//	// Remove tabs
//	str = str.replace(/[\t]/g, '');
//
//	// Replace multiple spaces with a single space
//	str = str.replace(/ +(?= )/g,'');
//
//	return str;
//};

var importHelper = require('handlebars-helper-import')(handlebars);
handlebars.registerHelper('import', importHelper);

function writeFile(file, data) {
	fs.writeFile(file, data, function(err) {
		if(err) { return console.log(err); }
		console.log(`${file} was saved!`);
	});
}

function buildHTML(sourceFile, targetFile, context) {
	var template = handlebars.compile(`{{import '${sourceFile}'}}`);
	writeFile(targetFile, template(context));
}

function buildCSS(sourceFile, targetFile) {
	var input = fs.readFileSync(sourceFile, 'utf-8');
	less.render(input).then(function (output) {
		writeFile(targetFile, output.css);
	});
}

//modules.export = function () {

	// Clean
	fs.removeSync(DIST);

	// Copy assets
	fs.copySync("./assets/files", DIST + "/files");
	fs.copySync("./assets/images", DIST + "/images");
	fs.copySync("./assets/js", DIST + "/js");
	fs.mkdirSync(DIST + "/css");
	fs.copySync("./assets/favicon.png", DIST + "/favicon.png");

	// Fetch & normalise project data;
	var projectData = fs.readJsonSync("./data/project_data.json");
	projectData.projects.forEach(function (project) {
		project._tags = project.tags.map(function (tagName) {
			return projectData.tags[tagName];
		});
	});

	// Render HTML
	buildHTML("templates/index.hbs", "dist/index", {
		title: "Sreenath Somarajapuram",
		bodyClass: "home-page"
	});
	buildHTML("templates/about.hbs", "dist/about", {
		title: "Sreenath S &#187; About",
		bodyClass: "about-page"
	});
	buildHTML("templates/contacts.hbs", "dist/contacts", {
		title: "Sreenath S &#187; Contacts",
		bodyClass: "contacts-page"
	});
	projectData.title = "Sreenath S &#187; Projects";
	projectData.bodyClass = "projects-page";
	buildHTML("templates/projects.hbs", "dist/projects", projectData);

	// Build CSS
	buildCSS("./assets/css/main.less", "./dist/css/main.css");
	buildCSS("./assets/css/lightbox.less", "./dist/css/lightbox.css");
	buildCSS("./assets/css/projects.less", "./dist/css/projects.css");
	buildCSS("./assets/css/home.less", "./dist/css/home.css");

//};
