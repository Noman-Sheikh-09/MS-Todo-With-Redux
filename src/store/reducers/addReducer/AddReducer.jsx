export const initialState ={
    data :[]
}

export const AddReducer=(state=initialState, action)=>{
switch(action.type){
    case 'ADD_TASK':
        const {id , data } = action.payload;
        return {
            ...state,
            data:[
                ...state,data,
                {
                    id:id,
                    data:data,
                }

            ]
           
        }
        default: return state
}

}