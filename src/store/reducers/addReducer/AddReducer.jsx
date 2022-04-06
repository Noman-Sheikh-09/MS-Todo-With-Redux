const initialState = {
    data :[]
}

export const AddReducer=(state=initialState, action)=>{
switch(action.type){
    case 'ADD_TASK':
        const {id , data } = action.payload;
        return {
            ...state,
            list:[
                ...state,action.payload,
                {
                    id:id,
                    data:data,
                }

            ]
           
        }
        default: return state
}

}