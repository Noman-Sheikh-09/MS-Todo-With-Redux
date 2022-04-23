import { v4 as uuidv4 } from 'uuid';
export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
        data:data ,
    }
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    id,
    
  };
};


export const updateTask = (data,id) => {
  return {
    type: "UPDATE_TASK",
   payload:{data:data,id:id}, 
    
 
  };
};


export const fvrtTask = (data,id) => {
  return {
    type: "FVRT_TASK",
   payload:{data:data,id:id},
    
 
  };
};