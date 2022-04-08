import { v4 as uuidv4 } from 'uuid';
export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
        id :uuidv4(), 
        data:data 
    }
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    id,
    
  };
};

export const updateTask = (data) => {
  return {
    type: "UPDATE_TASK",
   payload:data,
    
 
  };
};
