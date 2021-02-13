import React, {useState} from 'react';

import {ListGroup,Button,Card,Form } from "react-bootstrap"
import{useSelector,useDispatch} from "react-redux"
import { deleteTask, done } from '../JS/action/actionTask';
import Edit from './Edit';
const ListTask = () => {
    const list = useSelector(state => state.reducerTask.list);
    const dispatch = useDispatch();
   const [doneCheck, setDoneCheck] = useState(false);
   const [undoneCheck, setUndoneCheck] = useState(false);
    return (
        <div>

<Form.Group style={{display:"flex",justifyContent:"center",justifyContent:'space-evenly'}}controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="UnDone" 
    onChange={(e)=>setDoneCheck(e.target.checked)} 
    
    />
    <Form.Check type="checkbox" label="Done"
    onChange={(e)=>setUndoneCheck(e.target.checked)}
    />
  </Form.Group>
             {doneCheck===undoneCheck?
             list.map((el,i)=>(  

<Card style={{ width: '60rem', margin:'30px' }} key={i}>

<ListGroup variant="flush">
  <ListGroup.Item style={{display:'flex',justifyContent:'space-between'}}>
   
    <span style={el.isDone?{textDecoration:'line-through'}:{textDecoration:''}}>{el.text}</span>  

<div style={{display:'flex',justifyContent:'space-between'}}>
<Edit el ={el}/>
       
             <Button variant="danger" style={{marginLeft:'10px',marginRight:'10px'}}
             onClick={()=>dispatch(deleteTask(el.id))}
           
             >Delete</Button>
             <Button variant="info" style={{marginLeft:'10px',marginRight:'10px'}} 
            onClick={()=>dispatch(done(el.id))}
            >{el.isDone?"Undone":"Done"}</Button>
            
             </div>
  </ListGroup.Item>
  
</ListGroup>
</Card>
           
           ) )
          :undoneCheck?list.filter(el=>el.isDone===true).map((el,i)=>(  

            <Card style={{ width: '60rem', margin:'30px' }} key={i}>
            
            <ListGroup variant="flush">
              <ListGroup.Item style={{display:'flex',justifyContent:'space-between'}}>
               
                <span style={el.isDone?{textDecoration:'line-through'}:{textDecoration:''}}>{el.text}</span>  
            
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <Edit el ={el}/>
                   
                         <Button variant="danger" style={{marginLeft:'10px',marginRight:'10px'}}
                         onClick={()=>dispatch(deleteTask(el.id))}
                       
                         >Delete</Button>
                         <Button variant="info" style={{marginLeft:'10px',marginRight:'10px'}} 
                        onClick={()=>dispatch(done(el.id))}
                        >{el.isDone?"Undone":"Done"}</Button>
                        
                         </div>
              </ListGroup.Item>
              
            </ListGroup>
            </Card>
                       
                       ) ):list.filter(el=>el.isDone===false).map((el,i)=>

                       <Card style={{ width: '60rem', margin:'30px' }} key={i}>
            
                       <ListGroup variant="flush">
                         <ListGroup.Item style={{display:'flex',justifyContent:'space-between'}}>
                          
                           <span style={el.isDone?{textDecoration:'line-through'}:{textDecoration:''}}>{el.text}</span>  
                       
                       <div style={{display:'flex',justifyContent:'space-between'}}>
                       <Edit el ={el}/>
                              
                                    <Button variant="danger" style={{marginLeft:'10px',marginRight:'10px'}}
                                    onClick={()=>dispatch(deleteTask(el.id))}
                                  
                                    >Delete</Button>
                                    <Button variant="info" style={{marginLeft:'10px',marginRight:'10px'}} 
                                   onClick={()=>dispatch(done(el.id))}
                                   >{el.isDone?"Undone":"Done"}</Button>
                                   
                                    </div>
                         </ListGroup.Item>
                         
                       </ListGroup>
                       </Card>



                       )

                     

          
          
          
          
          }
           
             
           
             
        </div>
    )
}

export default ListTask;
