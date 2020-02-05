import React, { Component } from "react";
import axios from '../axios';
import NoteCard from './NoteCard';
import Header from '../components/UI/header';
import Spinner from '../components/UI/spinner'
import {Link} from 'react-router-dom';

class NotesHome extends Component {

  constructor(props) {
    super(props)
    this.state = {loading: false, existingNotes: null}
  }

  componentDidMount() {
    console.log("NoteHome Component did Mount.")
    this.setState({loading: true})
    axios.get('/mynotes.json').then(resp => {
      this.setState({loading: false, existingNotes: resp.data})}).catch(err =>
          console.log("Error is ", err))
  }

  makeReadable = (datetime) => {
    let origDateTime = new Date(datetime)
    return origDateTime.toDateString()
  }

  render (props) {
    let existingNotesList = this.state.existingNotes
    let noteCards = null
    let spinner = null
    if(this.state.loading) {
      spinner = <Spinner />
    }
    if (existingNotesList) {
      noteCards = Object.keys(existingNotesList).map(
        elem => {
          return (<NoteCard key={elem} id={elem}
                    title = {existingNotesList[elem].title}
                    time={this.makeReadable(existingNotesList[elem].datetime)}
                    content={existingNotesList[elem].content} />)
      })
      noteCards.reverse()
    }
    return (<div>
              <Header content="My Notes"/>
              <Link type="button" className="btn styled-button"
                    to={{pathname: "/new-note"}}>
                Add Note
              </Link><br/>
              {spinner ? spinner: <div className="notecards-area">{noteCards}</div>}
            </div>)
  }
}

export default NotesHome;