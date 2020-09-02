import React from "react";
import PropTypes from "prop-types";

const LogsTableRow = ({ log }) => {
  return (
    <tr>
      <td>{log.origin}</td>
      <td>{log.createdAt}</td>
      <td>{log.level}</td>
      <td>{log.message}</td>
    </tr>
  );
};

LogsTableRow.propTypes = {
  log: PropTypes.shape({
    id: PropTypes.string,
    origin: PropTypes.string,
    createdAt: PropTypes.string,
    message: PropTypes.string,
    level: PropTypes.oneOf(["info", "warning", "error"]),
  }),
};

export default LogsTableRow;
