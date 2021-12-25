const initialState = {};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            const { name, workplace, date } = action;
            return {
                name,
                workplace,
                date
            }
        default:
            return state;
    }
}
