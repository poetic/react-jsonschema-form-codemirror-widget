// NOTE: this global is used for javascript-lint addon
// NOTE: jshint is too restrictive
// window.JSHINT = require('jshint').JSHINT
// require('codemirror/addon/lint/javascript-lint')

require('codemirror/lib/codemirror.css')
require('codemirror/mode/javascript/javascript')
require('codemirror/addon/lint/lint.js')
require('codemirror/addon/lint/lint.css')
require('codemirror/addon/edit/closebrackets')

var React = require('react')
var CodeMirrorWidget = require('./CodeMirrorWidget')

var javascriptOptions = {
  lineNumbers: true,
  mode: 'application/javascript',
  lint: true,
  autoCloseBrackets: true,
  gutters: ['CodeMirror-lint-markers'],
}

module.exports = function CodeMirrorWidgetJavascript(props) {
  return React.createElement(
    CodeMirrorWidget,
    Object.assign(
      {},
      props,
      {
        options: Object.assign(
          {},
          javascriptOptions,
          props.options
        )
      }
    )
  )
}
