
let initalState = {
    count: 0,
    error: null
}

function counterReducer(state=initalState, action) {

    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'FETCH_COUNT':
            return {
                ...state,
                count: action.payload.count
            }
        case 'FETCH_COUNT_ERROR':
            return {
                ...state,
                count: 0,
                error: action.payload.error
            }
        default:
            return state
    }








    return state
}

export default counterReducer;
