const initialMessages = () => ([
    {
        id: 1,
        chatId: 1,
        text: 'Сообщение 1'
    },
    {
        id: 2,
        chatId: 1,
        text: 'Сообщение 2'
    },
    {
        id: 3,
        chatId: 2,
        text: 'Сообщение 3'
    }
]);


const initialState = {
    messages: initialMessages(),
    currentMessages: initialMessages(),
    currentChat: 0,
}


export const messagesReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case 'deleteMessage':
            const deleteMessageState = state.messages.filter((item) => item.id !== action.payload)
            return {
                ...state,
                messages: deleteMessageState,
                currentMessages: deleteMessageState.filter((item) => item.chatId === state.currentChat)
            }

        case 'addMessage':
            const addMessageState = [...state.messages, action.payload];
            return {
                ...state,
                messages: addMessageState,
                currentMessages: addMessageState.filter((item) => item.chatId === state.currentChat)
            }
        
        case 'selectMessagesByChat':
            return {
                ...state,
                currentChat: action.payload,
                currentMessages: state.messages.filter((item) => item.chatId === action.payload)
            }

        case 'resetSelect':
            return {
                ...state,
                currentChat: null,
                currentMessages: state.messages
            }

        default:
            return state
    }
}