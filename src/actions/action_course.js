import axios from 'axios';

export const FETCH_COURSES = 'FETCH_COURSES';
export const CREATE_COURSE = 'CREATE_COURSE';

const ROOT_URL = 'http://localhost:8080';

export function fetchCourses() {
  const request = axios.get(`${ROOT_URL}/courses`);

  return (dispatch) => {
    request.then((data) => {
      dispatch({
        type: FETCH_COURSES,
        payload: data
      });
    });
  };
}

export function createCourse(values) {
  const request = axios.post(`${ROOT_URL}/courses`, values);

  return (dispatch) => {
    request.then(() => {
      dispatch(fetchCourses());
    });
  };
}
