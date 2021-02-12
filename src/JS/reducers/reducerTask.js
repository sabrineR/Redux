import React from 'react'
import { ADD_TASK, DELETE, DONE, EDIT } from '../constants/actionTypes'

const initialState={
    list:[]
}


export const reducerTask = (state=initialState,{type,payload}) => {
   
        switch (type) {
            case ADD_TASK:
                return{
           ...state,list:[...state.list,payload]
                }
                case DELETE:
                    return{
                        ...state,list:state.list.filter((el)=>el.id!==payload)
                    }
            case DONE :
                return{
                    ...state,list:state.list.map((el)=> el.id===payload? {...el, isDone:!el.isDone}:el )
                }
            case EDIT :
                return{
                    ...state,list:state.list.map(el=>el.id===payload.id?{...el,text:payload.myInputEdit}:el )
                }


                
            default:
               return state;
        }
    
}
