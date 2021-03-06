import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Table from '../TableComponents/Table';
import Cell from '../TableComponents/Cell';
import Row from '../TableComponents/Row';
import DashboardRow from './DashboardRow';

const DashboardTable = ({
  fellows,
}) => (
  <Fragment>
    <Table>
      <Row header>
        <Cell>Fellow Name</Cell>
        <Cell>Level</Cell>
        <Cell>Quantity</Cell>
        <Cell>Quality</Cell>
        <Cell>Initiative</Cell>
        <Cell>Communication</Cell>
        <Cell>Professionalism</Cell>
        <Cell>Integration</Cell>
      </Row>
      {
       fellows.map(fellow => (
         <DashboardRow
           key={fellow.id}
           fellow={fellow}
         />
       ))
      }
    </Table>
  </Fragment>
);

DashboardTable.propTypes = {
  fellows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardTable;
