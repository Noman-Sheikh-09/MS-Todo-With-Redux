import {createStore} from 'redux'
import {RootReducer}  from '../store/reducers/rootReducer/RootReducer'

const Store = createStore(RootReducer);

export default Store;