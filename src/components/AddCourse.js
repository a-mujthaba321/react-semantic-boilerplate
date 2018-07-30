import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { createCourse } from '../actions/action_course';

import { withTransition } from '../components/hoc/withTransition';

import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {}

  onSubmit(values) {
    console.log('Values', values);
    this.props.createCourse(values);
    this.props.hide();
  }

  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="">{touched ? error : ''}</div>
      </div>
    );
  }

  renderCheckBox(field) {
    return (
      <div className="form-check">
        <input className="form-check-input" type="checkbox" {...field.input} />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {field.label}
        </label>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        {/* <div className="col-sm-2">
            <Link className="btn btn-primary" to="/">
              Go Back
            </Link>
          </div> */}
        <div className="col-sm-10">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <Field label="Course Name" name="courseName" type="text" component={this.renderField} />
            <Field
              label="Lecturer Name"
              name="lecturerName"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Number of Students"
              name="numberOfStudents"
              component={this.renderField}
              type="number"
            />
            <Field label="Is Full" name="isFull" component={this.renderCheckBox} />
            <Button type="submit">Save</Button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.courseName) {
    errors.courseName = 'Enter a course name';
  }

  // if errors is empty form can be submitted
  return errors;
}

const AddCourseWithTransition = withTransition(AddCourse);

export default reduxForm({
  form: 'AddCourseForm',
  validate
})(connect(
  null,
  { createCourse }
)(AddCourseWithTransition));
