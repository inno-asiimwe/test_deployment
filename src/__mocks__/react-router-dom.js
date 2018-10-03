import React from 'react';
import PropTypes from 'prop-types';

const rrd = require('react-router-dom');

// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;

rrd.BrowserRouter.propTypes = {
  children: PropTypes.objectOf(PropTypes.element, PropTypes.func).isRequired,
};

module.exports = rrd;
