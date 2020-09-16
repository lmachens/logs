import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useDictMessages } from "../../i18n/context";

const Table = styled.table`
  td {
    padding: 0.5rem 1rem;
  }
`;

const LogsTable = ({ children }) => {
  const dictMessages = useDictMessages();

  return (
    <Table>
      <thead>
        <tr>
          <td>{dictMessages.origin}</td>
          <td>{dictMessages.createdAt}</td>
          <td>{dictMessages.level}</td>
          <td>{dictMessages.message}</td>
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
