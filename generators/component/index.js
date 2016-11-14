'use strict'

var yo        = require('yeoman-generator')
var casing    = require('change-case')
var kebabCase = require('../../utils/kebab-case')

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
        message: 'Component name (PascalCase)',
      },
      {
        type:    'checkbox',
        name:    'options',
        message: 'Component options',
        choices: [
          { name: 'isStateful'  },
          { name: 'isContainer' },
        ],
      }
    ]

    this.prompt(options, function(props) {
      self.props = props
      return done()
    })
  },

  writing: function() {
    var file        = kebabCase(this.props.name.trim())
    var isStateful  = this.props.options.indexOf('isStateful')  >= 0
    var isContainer = this.props.options.indexOf('isContainer') >= 0
    var type        = isContainer ? 'container' : 'component'

    var context = {
      file:        file,
      type:        type,
      name:        casing.pascalCase(this.props.name.trim()),
      isStateful:  isStateful,
      isContainer: isContainer,
    }

    var path = 'src/app/' + type + 's/' + file + '/'

    this.fs.copyTpl(
      this.templatePath('new-component.tsx.erb'),
      this.destinationPath(path + 'index.tsx'),
      context
    )

    this.fs.copyTpl(
      this.templatePath('new-component.sass.erb'),
      this.destinationPath(path + 'style.sass'),
      context
    )
  },
})
