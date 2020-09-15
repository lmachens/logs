import React, { useState } from "react";
import LogsTable from "../../components/LogsTable/LogsTable";
import LogsTableRow from "../../components/LogsTableRow/LogsTableRow";
import { getLogs } from "../../api/logs";
import useAsync from "../../hooks/useFetch";
import LevelFilters from "../../components/LevelFilters";

const Logs = () => {
  const [filters, setFilters] = useState(["error", "warning", "info"]);
  const { data: logs, loading } = useAsync(getLogs, filters);

  return (
    <>
      <LevelFilters filters={filters} onChange={setFilters} />
      <LogsTable>
        {logs?.map((log) => (
          <LogsTableRow key={log._id} log={log} />
        ))}
      </LogsTable>
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Logs;
