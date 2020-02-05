import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Notecard extends Component {
    constructor(props) {
        super(props)
        this.state = {detailed: false}
    }

    toggleDetailedContent = () => {
        this.setState(prevState => {return {detailed: !prevState.detailed}})
    }

    clickHandler = event => {
        event.stopPropagation()
    }

    render (props) {
        let detailedContent = null
        if (this.state.detailed) {
            detailedContent = this.props.content? this.props.content:"(empty)"
        }
        let title=this.props.title?this.props.title:"(No Title)"
        console.log("title", title)
        return (
            <div className="note-card" onClick={this.toggleDetailedContent}>
                <div className="note-area">
                    <div className="note-card-title">{title}&nbsp;&nbsp;&nbsp;</div>
                    <div className="note-card-subtitle">Created on<i>  {this.props.time}  </i>&nbsp;
                      <Link onClick={this.clickHandler}
                        className="crud-button fas fa-edit"
                        to = {{
                          pathname: '/edit-note',
                          state: {id: this.props.id, title: title,
                                  content: this.props.content}
                        }}/>
                      &nbsp;
                      <Link onClick={this.clickHandler}
                        className="crud-button fas fa-trash-alt"
                        to = {{
                          pathname: '/delete-note',
                          state: {id: this.props.id, title: title}
                        }}/>
                    </div>
                </div>
                <pre><i>{detailedContent}</i></pre>
            </div>
        )}
}

export default Notecard