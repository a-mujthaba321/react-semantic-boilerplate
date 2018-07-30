import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCourses } from '../actions/action_course';

import { Link } from 'react-router-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { withTransition } from '../components/hoc/withTransition';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderCourses() {
    return _.map(this.props.courses, course => (
      <li className="list-group-item" key={course.id}>
        <Link to={`/courses/${course.id}`}> {course.courseName} </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h4>Courses</h4>
        <div className="row">
          <div className="col-sm-10">{this.renderCourses()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(
  mapStateToProps,
  { fetchCourses }
)(withTransition(CourseList));
