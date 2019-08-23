// reducer is a function that takes state and action and returns new state
import * as types from "../actions/actionTypes";

export default function courseReducer( state = [],action ) {
    switch (action.type) {
        case types.CREATE_COURSE :
            // this will copy the state and add the object that comes from this specific action => ( course)
            return [...state, { ...action.course }];

        case types.LOAD_COURSES_SUCCESS :
            return action.courses
        default:
            return state
    }
}