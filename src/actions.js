import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED 
} from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text // submit data
})

// the requestRobots action gets triggered it's going to return a function and trigger redux-thunk
// redux-thunk is going to say ... on this is a function, return give you dispatch
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}