import { AddReducer } from "../addReducer/AddReducer";
import {combineReducers} from 'redux';
export const RootReducer= combineReducers({
    AddReducer,
});
