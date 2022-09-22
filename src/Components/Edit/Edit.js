import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"

const Edit = () => {
const [newTask, setNewTask] = useState(task.text);
const handleClose = () => useState (false);
const handleClose = () => setShow (false);
const handleShow = () => setShow(true);




  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change the task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default Edit