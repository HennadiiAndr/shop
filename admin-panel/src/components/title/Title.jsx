import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CommonTitle extends React.Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <div style={{height: '10px'}} />
        <div style={{borderBottom: '2px solid #ccc'}}>{title}</div>
        <div style={{height: '5px'}} />
      </div>
    );
  }
}

CommonTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CommonTitle;
