/* global __dirname */

'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-tonysneed-vscode-typescript:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.vscode/launch.json',
      '.vscode/tasks.json',
      'lib/jasmine-2.4.1/boot.js',
      'lib/jasmine-2.4.1/console.js',
      'lib/jasmine-2.4.1/jasmine.css',
      'lib/jasmine-2.4.1/jasmine.js',
      'lib/jasmine-2.4.1/jasmine-html.js',
      'lib/jasmine-2.4.1/jasmine_favicon.png',
      'src/greeter/greeter.ts',
      'src/greeter/greeter.spec.ts',
      'src/tsconfig.json',
      'util/system.imports.js',
      'util/system.template.js',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.jscsrc',
      '.jshintrc',
      '.travis.yml',
      'gulp.config.js',
      'gulpfile.js',
      'karma.conf.js',
      'LICENSE',
      'package.json',
      'README.md',
      'SpecRunner.html',
      'tsd.json',
      'tslint.json'
    ]);
  });

  it('creates typings', function () {
    assert.file([
      'typings/tsd.d.ts',
      'typings/chokidar/chokidar.d.ts',
      'typings/express/express.d.ts',
      'typings/gulp-nodemon/gulp-nodemon.d.ts',
      'typings/jasmine/jasmine.d.ts',
      'typings/mime/mime.d.ts',
      'typings/node/node.d.ts',
      'typings/serve-static/serve-static.d.ts',
      'typings/yargs/yargs.d.ts'
    ]);
  });
});
