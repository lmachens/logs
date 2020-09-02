import React from "react";
import LogsTable from "../../components/LogsTable/LogsTable";
import LogsTableRow from "../../components/LogsTableRow/LogsTableRow";
import { getLogs } from "../../api/logs";
import useAsync from "../../hooks/useFetch";

const Logs = () => {
  const { data: logs, loading } = useAsync(getLogs);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <LogsTable>
      {logs?.map((log) => (
        <LogsTableRow key={log.id} log={log} />
      ))}
    </LogsTable>
  );
};

export default Logs;
