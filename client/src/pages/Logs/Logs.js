import React, { useState } from "react";
import LogsTable from "../../components/LogsTable/LogsTable";
import LogsTableRow from "../../components/LogsTableRow/LogsTableRow";
import { getLogs } from "../../api/logs";
import useAsync from "../../hooks/useFetch";
import LevelFilters from "../../components/LevelFilters";
import { useDictMessages } from "../../i18n/context";

const Logs = () => {
  const [filters, setFilters] = useState(["error", "warning", "info"]);
  const { data: logs, loading } = useAsync(getLogs, filters);
  const dictMessages = useDictMessages();

  return (
    <>
      <LevelFilters filters={filters} onChange={setFilters} />
      <LogsTable>
        {logs?.map((log) => (
          <LogsTableRow key={log._id} log={log} />
        ))}
      </LogsTable>
      {loading && <div>{dictMessages.loading}</div>}
    </>
  );
};

export default Logs;
