

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Sergey'
        },
        {
            id: 2,
            name: 'Andrey'
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}