
const initialState = {
  list: [],
};

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          action.payload,
          
        ],
        
      };
      
        case "DELETE_TASK":
          const listAfterDelete = state.list.filter((value)=> value.id !== action.id  )
            return {
                ...state,
                list: listAfterDelete,
               
            }


            case "UPDATE_TASK":{
          const listAfterUpdate = state.list.map((value,id)=> {

           if ( value.id === action.payload.id) {
             return action.payload
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
