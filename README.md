[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

[travis-image]:            https://img.shields.io/travis/poetic/react-jsonschema-form-codemirror-widget.svg?branch=master
[travis-url]:              https://travis-ci.org/poetic/react-jsonschema-form-codemirror-widget
[npm-image]:               https://img.shields.io/npm/v/react-jsonschema-form-codemirror-widget.svg
[npm-url]:                 https://npmjs.org/package/react-jsonschema-form-codemirror-widget
[semantic-release-image]:  https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:    https://github.com/semantic-release/semantic-release
[coverall-image]:          https://img.shields.io/coveralls/poetic/react-jsonschema-form-codemirror-widget.svg
[coverall-url]:            https://coveralls.io/github/poetic/react-jsonschema-form-codemirror-widget

## Example

```
import React from 'react'
import { CodeMirrorWidgetJavascript, CodeMirrorWidgetJSON } from 'react-jsonschema-form-codemirror-widget'
import Form from "react-jsonschema-form"

class MyForm extends React.Component {
  render() {
    const schema = {
      title: "Blog",
      type: "object",
      properties: {
        codeMirrorJavascript: {type: "string"},
        codeMirrorJSON: {type: "string"}
      }
    }

    const uiSchema = {
      codeMirrorJavascript: {
        "ui:widget": "codeMirrorJavascript"
      },
      codeMirrorJSON: {
        "ui:widget": "codeMirrorJSON"
      }
    }

    return <Form
      widgets={{codeMirrorJavascript: CodeMirrorWidgetJavascript, codeMirrorJSON: CodeMirrorWidgetJSON}}
      schema={schema}
      uiSchema={uiSchema}
    />
  }
}
```
