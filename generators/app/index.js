'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('appname', {type: String, required: false});

    this.option('skip-install', {
      desc: 'Whether dependencies should be installed',
      defaults: false
    });

    this.sourceRoot(path.join(path.dirname(this.resolved), 'templates'));
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to Tony Sneed\'s ' + chalk.yellow('Visual Studio Code TypeScript') + ' generator!'
    ));

    var dirname = path.basename(process.cwd());
    this.appname = _.kebabCase(dirname);

    var prompts = [
      {
        type: 'input',
        name: 'appname',
        message: 'Application Name (' + chalk.yellow(this.appname) + ')'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.appname = props.appname || this.appname;
    }.bind(this));
  },

  writing: {
    project: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          appname: this.appname
        });
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        {
          appname: this.appname
        });
    },
    files: function () {
      this.copy('editorconfig', '.editorconfig');
      this.copy('gitattributes', '.gitattributes');
      this.copy('gitignore', '.gitignore');
      this.copy('jscsrc', '.jscsrc');
      this.copy('jshintrc', '.jshintrc');
      this.copy('travis.yml', '.travis.yml');
      this.copy('_gulp.config.js', 'gulp.config.js');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_karma.conf.js', 'karma.conf.js');
      this.copy('_LICENSE', 'LICENSE');
      this.copy('_SpecRunner.html', 'SpecRunner.html');
      this.copy('_tslint.json', 'tslint.json');
    },
    directories: function () {
      this.directory('vscode', '.vscode');
      this.directory('_lib', 'lib');
      this.directory('_src', 'src');
      this.directory('_util', 'util');
    }
  },

  install: function () {
    this.installDependencies({
      bower: false,
      skipInstall: this.options['skip-install']
    });
  },

  end: function () {
    this.log(chalk.yellow.bold('Installation successful!'));
  }
});
