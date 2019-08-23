import * as types from "./actionTypes";
import * as authorApi from '../../api/authorApi'

export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// Creating Thunk funciton

// Creating the dispatch function that calls the action and returns the data
export function loadCourseSuccess(courses) {
    return {type : types.LOAD_COURSES_SUCCESS, courses:courses}
}

// wel will wait for the API respond then dispatch the action
export function loadAuthors() {
    return function (dispatch) {
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw  error;
        })
    }
}