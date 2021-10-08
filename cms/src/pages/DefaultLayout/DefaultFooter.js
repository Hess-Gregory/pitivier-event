import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { images } from 'helpers';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
const divStyle = {
  height: 30
};
const divStyle2 = {
  height: 20
};
class DefaultFooter extends Component {
  render() {
    const thisYear = new Date().getFullYear();
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://github.com/Hess-Gregory"><img src={images.logocms} alt="Logo" style={divStyle} /></a> &copy; {thisYear} Fullhestack.</span>
        <span className="ml-auto">Injecté par <a href="https://www.fullhestack.be"><img src={images.logofhk} alt="Logo" style={divStyle2} /></a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
