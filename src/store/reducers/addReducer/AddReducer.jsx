
const initialState = {
  list: [],
};

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      
      const addTask=[...state.list,action.payload.data]
      return {
        ...state,
        list: addTask,
        
      };
      
        case "DELETE_TASK":
          const listAfterDelete = state.list.filter((value)=> value.id !== action.id  )
            return {
                ...state,
                list: listAfterDelete,
               
            }


            case "UPDATE_TASK":{
          const listAfterUpdate = state.list.map((value)=> {

           if ( value.id === action.payload.id) {
             return action.payload.data;
           } 
          else{
            return  value
          }} )
          return {
            ...state,
            list: listAfterUpdate
          };
        }
        case "FVRT_TASK":{
          const listAfterUpdate = state.list.map((value)=> {

           if ( value.id === action.payload.id) {
             return action.payload.data;
           } 
          else{
            return  value
          }} )
          return {
            ...state,
            list: listAfterUpdate
          };
        }
            
            default:
                return state
        };
  
  
};
