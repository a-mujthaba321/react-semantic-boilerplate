import { FETCH_COURSES } from '../actions/action_course';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_COURSES:
      return _.mapKeys(action.payload.data._embedded.courses, '_links.self.href');
    default:
      return state;
  }
}
