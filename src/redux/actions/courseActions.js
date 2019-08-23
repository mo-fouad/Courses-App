import * as types from "./actionTypes";
import * as courseApi from '../../api/courseApi'

export function createCourse(course) {
    return {type:"CREATE_COURSE", course: course};
}

// Creating Thunk funciton

// Creating the dispatch function that calls the action and returns the data
export function loadCourseSuccess(courses) {
    return {type : types.LOAD_COURSES_SUCCESS, courses:courses}
}

// wel will wait for the API respond then dispatch the action
export function loadCourses() {
    return function (dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch(loadCourseSuccess(courses));
        }).catch(error => {
            throw  error;
        })
    }
}