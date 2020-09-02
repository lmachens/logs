import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Table = styled.table`
  td {
    padding: 0.5rem 1rem;
  }
`;

const LogsTable = ({ children }) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>Origin</td>
          <td>Created At</td>
          <td>Level</td>
          <td>Message</td>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

LogsTable.propTypes = {
  children: PropTypes.node,
};

export default LogsTable;
