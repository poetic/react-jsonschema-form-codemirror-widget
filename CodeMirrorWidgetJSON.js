// NOTE: this is used for json-lint addon
var parser = require('jsonlint').parser
window.jsonlint = parser
require('codemirror/addon/lint/json-lint')

require('codemirror/lib/codemirror.css')
require('codemirror/mode/javascript/javascript')
require('codemirror/addon/lint/lint.js')
require('codemirror/addon/lint/lint.css')
require('codemirror/addon/edit/closebrackets')

var React = require('react')
var CodeMirrorWidget = require('./CodeMirrorWidget')

var jsonOptions = {
  lineNumbers: true,
  mode: 'application/json',
  lint: true,
  autoCloseBrackets: true,
  gutters: ['CodeMirror-lint-markers'],
}

module.exports = function CodeMirrorWidgetJSON(props) {
  return React.createElement(
    CodeMirrorWidget,
    Object.assign(
      {},
      props,
      {
        options: Object.assign(
          {},
          jsonOptions,
          props.options,
        )
      }
    )
  )
}
