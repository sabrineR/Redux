

import { ADD_TASK, DELETE, DONE ,EDIT} from '../constants/actionTypes'

export const addTask =(payload)=> {
    return (
    {
        type:ADD_TASK,
        payload
    }
    )
}
export const deleteTask = (payload) =>{
    return(
        {
            type:DELETE,
            payload
        }
    )
}
export const done = (payload) =>{
    return(
        {
            type:DONE,
            payload
        }
    )
}

export const editTask = (payload) => {
    return (
        {
            type:EDIT,
            payload
        }
    )
}


