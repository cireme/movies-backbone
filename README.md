README
======

BackboneJS marionette POC that using [http://gangofbb.bhtz.fr/](http://gangofbb.bhtz.fr/) rest api.

Illustrate how to build backbone marionette single page application with requirejs.
Grunt tasks can build production application with one index.js file (vendors, application and precompiled handlebars templates).

You have to create account and sign in in same browser.

Requirements
------------

	node.js >= 0.8
	grunt-cli
	npm
	stylus
	bower

Installation
------------

	bower install
	npm install
	grunt run

Build production apps
---------------------

	grunt production

Ready to use production application can be found in ./build folder.

Licence
-------

movies-backbone is released under the MIT license.