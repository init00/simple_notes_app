import React, { Component } from 'react';
import axios from '../axios'
import NoteArea from '../components/UI/notearea';
import Button from '../components/UI/button';
import getTitleContent from '../utility/getTitleContent';
import Header from '../components/UI/header';

class EditNote extends Component {
  //update a note
  constructor(props) {
    super(props)
    this.state = {changeDetected: false, btnDisabled: true}
  }

  cancelNoteHandler = () => {
    console.log("Cancel edit note. Redirecting to home.")
    this.props.history.push("/")
  }

  updateNoteHandler = () => {
    let payLoad = {...getTitleContent(),
                   id: this.props.location.state.id,
                   datetime: new Date()
                  }
    console.log("Payload is ", payLoad)
    axios.put('/mynotes/'+this.props.location.state.id+'.json', payLoad).then(
      response => {
        console.log("Updated successful, redirecting now..")
        this.props.history.push("/")
      }).catch( err =>
        console.log("Error while updating: ", err))
  }

  //cancel update
  changeHandler = () => {
    console.log("Redirecting to home.")
    if(!this.state.changeDetected) {
      this.setState({changeDetected: true, btnDisabled: false})
    }
  }

  render(props) {
    console.log(this.props)
    let editNoteArea = (
      <div>
        <NoteArea changeHandler={this.changeHandler}
          title={this.props.location.state.title}
          content={this.props.location.state.content} />
        <Button disableButton={this.state.btnDisabled}
                btnType="success" clickHandler={this.updateNoteHandler}
                displayTitle="Update this note!" />
        <Button btnType="info" clickHandler={this.cancelNoteHandler}
                displayTitle="Cancel" />
      </div>)
    return (<div>
        <Header content="Go Back to My Notes" headerStyle="sub-header"/>
        {editNoteArea}
        </div>)

    }
}

export default EditNote