import React from "react";
import PropTypes from "prop-types";

const LogsTable = ({ children }) => {
  return (
    <table>
      <thead>
        <td>Origin</td>
        <td>Created At</td>
        <td>Level</td>
        <td>Message</td>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

LogsTable.propTypes = {
  children: PropTypes.node,
};

export default LogsTable;
