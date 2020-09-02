import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const levelColors = {
  info: "--info-color",
  warning: "--warning-color",
  error: "--error-color",
};
const Level = styled.td`
  color: var(${(props) => levelColors[props.level]});
`;

const LogsTableRow = ({ log }) => {
  return (
    <tr>
      <td>{log.origin}</td>
      <td>{log.createdAt}</td>
      <Level level={log.level}>{log.level}</Level>
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
