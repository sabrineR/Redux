import React from 'react'
import './AddItem.css'
import { useState } from "react";
import { InputGroup,FormControl,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from '../JS/action/actionTask';
const AddItems = () => {
  const [myInput, setmyInput] = useState("");
  const dispatch = useDispatch();
  const add =()=>{
    if(myInput){
    dispatch(addTask({text:myInput,isDone:false,id:Date.now()}));
                  setmyInput("");
}}
    return (
        <div className='addd'>
    <InputGroup className="mb-3">
    <FormControl
      aria-label="Recipient's username"
      value={myInput}
      aria-describedby="basic-addon2" onChange={(e)=>setmyInput(e.target.value)}
    />
    <InputGroup.Append>
    <Button variant="secondary"  onClick={add}>
      Add</Button>
    </InputGroup.Append>
  </InputGroup>
        </div>
    )
}

export default AddItems
