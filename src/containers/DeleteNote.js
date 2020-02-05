import React, { Component } from "react";
import axios from '../axios'
import Modal from '../components/UI/modal'

class DeleteNote extends Component {

    //delete cancelled
    cancelDeleteHandler = () => {
        this.props.history.push("/")
    }

    //delete confirmed
    confirmDeleteHandler = () => {
        axios.delete('/mynotes/'+this.props.location.state.id+'.json').then(
            response => {
                console.log("Delete successful, redirecting now..")
                this.props.history.push("/")
              }).catch( err =>
                console.log("Error while deleting: ", err))
    }

    render() {
        return <Modal deleteTitle={this.props.location.state.title}
                    deleteCancelled={this.cancelDeleteHandler}
                    deleteConfirmed={this.confirmDeleteHandler} />
    }
}

export default DeleteNote