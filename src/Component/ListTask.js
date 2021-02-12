import React from 'react'
import {  useState} from "react";
import {ListGroup,Button,Card,Modal,FormControl} from "react-bootstrap"
import{useSelector,useDispatch} from "react-redux"
import { deleteTask, done } from '../JS/action/actionTask';
import Edit from './Edit';
const ListTask = () => {
    const list = useSelector(state => state.reducerTask.list);
    const dispatch = useDispatch();
  //   const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
    return (
        <div>
             {list.map(el=>(  

<Card style={{ width: '60rem', margin:'30px' }}>

<ListGroup variant="flush">
  <ListGroup.Item style={{display:'flex',justifyContent:'space-between'}}>
    {el.isDone?<span style={{textDecoration:'line-through'}}>{el.text}</span> :<span>{el.text}</span> }
     {/* <span style={el.isDone?{textDecoration:'line-through'}:{textDecoration:null}}>{el.text}</span>  */}
<div style={{display:'flex',justifyContent:'space-between'}}>
<Edit el ={el}/>
       
             <Button variant="danger" style={{marginLeft:'10px',marginRight:'10px'}}
             onClick={()=>dispatch(deleteTask(el.id))}
           
             >Delete</Button>
             <Button variant="info" style={{marginLeft:'10px',marginRight:'10px'}} 
            onClick={()=>dispatch(done(el.id))}
            >isDone</Button>
            
             </div>
  </ListGroup.Item>
  
</ListGroup>
</Card>
           
           ))}
           
             
           
             
        </div>
    )
}

export default ListTask;
