
export function fetchCount() {
    return dispatch => {

        return dispatch({type: 'FETCH_COUNT', payload: {count: 5}})
        // This would be a call to the db for the count
        // fetch('http://localhost:5000/name')
        //     .then(response => response.json())
        //     .then(data => {
        //         dispatch({type: 'FETCH_COUNT', payload: data})
        //     })
        //     .catch(error => {
        //         dispatch({type: 'FETCH_COUNT_ERROR', payload: error})
        //     })


    }
}

export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function decrement() {
    return {
        type: 'DECREMENT' 
    }
}
