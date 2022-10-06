import {combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";

const reducer = combineReducers({
    chatsReducer,
    messagesReducer
})
export const store = createStore(reducer)