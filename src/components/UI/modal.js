import React from 'react'
import Button from './button'
import Modal from 'react-bootstrap/Modal'

const modal = (props) => {
    return (<div>
        <Modal.Dialog className="modal-dialog">
            <Modal.Header className="modal-header">
                Delete for sure: {props.deleteTitle} ?
            </Modal.Header>
            <Modal.Footer className="modal-footer">
                <Button btnType="danger" clickHandler={props.deleteConfirmed}
                        displayTitle="Delete" />
                <Button btnType="info" clickHandler={props.deleteCancelled}
                    displayTitle="Cancel" />
            </Modal.Footer>
        </Modal.Dialog>
    </div>)
}

export default modal