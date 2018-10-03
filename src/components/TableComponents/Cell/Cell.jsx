import React from 'react';
import PropTypes from 'prop-types';

import './cell.css';
/**
 * @param {Object} props Component props
 *
 * @returns {JSX} React JSX
 */
const Cell = ({ title, children }) => (
  <div className="dashboard-table__cell" data-title={title}>
    {children}
  </div>
);

Cell.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Cell.defaultProps = {
  title: '',
  children: '',
};

export default Cell;
