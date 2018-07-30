import React from 'react';
import ReactDOM from 'react-dom';

import AddCourse from './AddCourse';
import CourseList from './CourseList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false
    };
    this.showAddDialog = this.showAddDialog.bind(this);
  }

  showAddDialog() {
    this.setState({
      showAdd: !this.state.showAdd
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-4">
            <button className="btn btn-primary text-right" onClick={this.showAddDialog}>
              {this.state.showAdd ? 'Back to Courses' : 'Add Course'}
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.showAdd && <AddCourse hide={this.showAddDialog} />}
          {!this.state.showAdd && <CourseList />}
        </div>
      </div>
    );
  }
}
