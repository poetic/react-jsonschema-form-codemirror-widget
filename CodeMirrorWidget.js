var React = require('react')
var CodeMirror = require('react-codemirror')
var classNames = require('classnames')

module.exports = function CodeMirrorWidget(props) {
  // props
  // {
  //   schema,
  //   id,
  //   placeholder,
  //   className,
  //   value,
  //   required,
  //   disabled,
  //   readonly,
  //   onChange,
  //   options,
  // }

  return React.createElement(
    CodeMirror,
    {
      value: value || '',
      className: classNames({ props.readonly }, props.className),
      onChange: props.onChange,
      options: Object.assign(
        {},
        {readOnly: props.readonly},
        props.options,
      )
    }
  )
}
