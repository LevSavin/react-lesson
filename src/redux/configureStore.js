import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from "./reducers/chatsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist"

const config = {
    key: "root",
    storage,
}

const reducer = combineReducers({
    chatsReducer,
    messagesReducer
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

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(handleMessage));
export const persistor = persistStore(store);

// export const store = createStore(reducer, applyMiddleware(botMessage)) - обчный стор