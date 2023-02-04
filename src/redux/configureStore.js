import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import {productsReducer} from "./reducers/productsReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from "redux-thunk" 

const reducer = combineReducers({
    chatsReducer,
    messagesReducer,
    productsReducer,
    authReducer,
})

const handleMessage = store => next => action => {
    let result = next(action)
    
    if (action.type === "addMessage") {
        console.log("before", action)
        console.log("before", store.getState())
        console.log("after", store.getState())
        const addBotMessageTimeout = () => { setTimeout(() => {
            const newBotMessage = {
                chatId: action.payload.chatId,
                id: Date.now(),
                text: "Cпасибо за ваше сообщение",
            }
            store.dispatch({ type: 'addBotMessage', payload: newBotMessage})
            clearTimeout(addBotMessageTimeout);
        }, 1500)}
        addBotMessageTimeout();
    }

    return result
}

export const store = createStore(reducer, applyMiddleware(thunk, handleMessage))