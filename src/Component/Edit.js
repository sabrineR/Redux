import React from 'react'
import {  useState} from "react";
import {ListGroup,Button,Card,Modal,FormControl} from "react-bootstrap"
import{useSelector,useDispatch} from "react-redux"
import { editTask } from '../JS/action/actionTask';
const Edit = ({el}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [myInputEdit, setmyInputEdit] = useState("");
  const dispatch = useDispatch()

    return (
      
        
        <div>
          {console.log(el.isDone)}
            <Button variant="success" onClick={handleShow}>Edit  </Button>
        
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your text</Modal.Title>
        </Modal.Header>
        
        <FormControl
      placeholder={el.text}
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setmyInputEdit(e.target.value)}
      
    />
        <Modal.Footer>
         
          <Button variant="primary" onClick={()=>{
              dispatch(editTask({id:el.id,myInputEdit:myInputEdit}));
              handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default Edit
