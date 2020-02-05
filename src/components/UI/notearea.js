import React from 'react'
import Form from 'react-bootstrap/Form'

const noteArea = (props) => {
    return (
      <Form>
        <Form.Group className="notes-textarea-enclosure">
            <Form.Control id="form-title" onChange={props.changeHandler}
              className="notes-titlearea" type="text" placeholder="Enter title"
              defaultValue={props.title ? props.title: null}/>
            <Form.Control id="form-text" onChange={props.changeHandler}
              className="notes-textarea" as="textarea"
              placeholder="Enter new note" rows="10"
              defaultValue={props.content? props.content: null}/>
        </Form.Group>
      </Form>
    )
}

export default noteArea