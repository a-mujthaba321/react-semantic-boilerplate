import React from 'react';
import ReactDOM from 'react-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const transitionOptions = {
  transitionName: 'fade',
  transitionEnterTimeout: 500,
  transitionLeaveTimeout: 500,
  transitionAppear: true,
  transitionAppearTimeout: 500,
  transitionLeave: true
};

export const withTransition = WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <ReactCSSTransitionGroup {...transitionOptions}>
            <WrappedComponent {...this.props} />
          </ReactCSSTransitionGroup>
        </div>
      );
    }
  };
