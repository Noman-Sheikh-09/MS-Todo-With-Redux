// import uuid from 'uuid/v5'
export const addTask = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
        id : new Date().getTime().toString(),
        data:data 
    }
  };
};

export const deleteTask = () => {
  return {
    type: "DELETE_TASK",
  };
};

export const updateTask = () => {
  return {
    type: "UPDATE_TASK",
  };
};
