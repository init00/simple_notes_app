import React, { Component } from 'react'
import NoteArea from '../components/UI/notearea'
import Header from '../components/UI/header';
import Button from '../components/UI/button'
import axios from '../axios'
import getTitleContent from '../utility/getTitleContent';
import checkEmptyTitleContent from '../utility/checkEmpty';

class NewNote extends Component {
    //save new note
    constructor(props) {
        super(props)
        this.state = {btnDisabled: false}
    }

    componentDidMount() {
        if (checkEmptyTitleContent()) {
            this.setState({btnDisabled: true})
        }
    }

    setDefaultTitle(content) {
        return content.slice(0,20)+ (content.length>20?'...':'')
    }

    changeHandler = () => {
        if (!checkEmptyTitleContent()) {
            {this.setState({btnDisabled: false})}
        } else {
            {this.setState({btnDisabled: true})}
        }
    }

    saveNoteHandler = () => {
        let payLoad = {...getTitleContent(),
                       datetime: new Date()
                    }
        if (payLoad.title === "") {
            payLoad.title = this.setDefaultTitle(payLoad.content)
        }
        console.log("New note payload is ", payLoad)
        axios.post('/mynotes.json', payLoad).then(
            response => {
                console.log("New note creation successful, redirecting now.")
                this.props.history.push("/")
            }).catch(err => console.log("Error in new note creation.", err))
    }

    cancelNoteHandler = () => {
        console.log("Cancel new note. Redirecting to home.")
        this.props.history.push("/")
    }

    render() {
        return (<div>
                    <Header content="Back to My Notes"/>
                    <NoteArea changeHandler={this.changeHandler} />
                    <Button disableButton={this.state.btnDisabled}
                            btnType="success" clickHandler={this.saveNoteHandler}
                            displayTitle="Save this note!" />
                    <Button btnType="info" clickHandler={this.cancelNoteHandler}
                            displayTitle="Cancel" />
                </div>)
    }

}

export default NewNote