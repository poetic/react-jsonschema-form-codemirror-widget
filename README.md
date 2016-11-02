## Example

```
import React from 'react'
import CodemirrorWidget from 'react-jsonschema-form-codemirror-widget'
import Form from "react-jsonschema-form"

class MyForm extends React.Component {
  render() {
    const schema = {
      title: "Blog",
      type: "object",
      properties: {
        codeSnippet: {type: "string"},
      }
    }

    const uiSchema = {
      codeSnippet: {
        "ui:widget": "codeMirror"
      }
    }

    return <Form
      widgets={{codeMirror: CodemirrorWidget}}
      schema={schema}
      uiSchema={uiSchema}
    />
  }
}
```
