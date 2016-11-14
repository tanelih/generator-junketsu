'use strict'

var ce = require('command-exists')
var yo = require('yeoman-generator')

/**
 * Generate a project skeleton.
 */
module.exports = yo.Base.extend({

  prompting: function() {
    var self = this
    var done = this.async()

    var options = [
      {
        type:    'input',
        name:    'name',
        message: 'Project name',
      },
      {
        type:    'input',
        name:    'description',
        message: 'Project description',
      }
    ]

    this.prompt(options, function(props) {
      self.props = props
      return done()
    })
  },

  writing: function() {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src'))

    this.fs.copy(
      this.templatePath('config'),
      this.destinationPath('config'))

    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'))

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig'))

    this.fs.copy(
      this.templatePath('global.d.ts'),
      this.destinationPath('global.d.ts'))

    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json'))

    this.fs.copyTpl(
      this.templatePath('package.json.erb'),
      this.destinationPath('package.json'), this.props)

    this.fs.copyTpl(
      this.templatePath('index.html.erb'),
      this.destinationPath('index.html'), this.props)
  },

  install: function() {
    return this.npmInstall()
  }
})
