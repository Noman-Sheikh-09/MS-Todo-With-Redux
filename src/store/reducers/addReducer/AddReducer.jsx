const ADD_TASK ="ADD_TASK";

 const initialState = {
    list  :[]
}

export const AddReducer=(state=initialState, action)=>{
switch(action.type){
    case ADD_TASK:
        const {id , data } = action.payload;
        return {
            ...state,
            list:[
                ...state.list ,action.payload,
                // {
                //     id:id,
                //     data:data,
                // }
            ]
           
        }
        default: return state
}

}