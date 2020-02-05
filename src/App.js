import React, {Component} from 'react';
import './App.css';
import NewNote from './containers/NewNote';
import NotesHome from './containers/NotesHome';
import { Route, Switch } from 'react-router';
import EditNote from './containers/EditNote';
import DeleteNote from './containers/DeleteNote'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  //render the page
  render() {
    return (
      <div className="app-enclosure">
        <Switch>
          <Route exact path="/" component={NotesHome} />
          <Route exact path="/new-note" component={NewNote} />
          <Route exact path="/edit-note" component={EditNote} />
          <Route exact path="/delete-note" component={DeleteNote} />
        </Switch>
      </div>
    )
  }
}

export default App;
