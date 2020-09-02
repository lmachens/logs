import React from "react";

import LogsTable from "./LogsTable";
import LogsTableRow from "../LogsTableRow";

export default {
  title: "LogsTable",
  component: LogsTable,
};

const Template = (args) => <LogsTable {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  children: (
    <tr>
      <td colSpan={3}>No logs available</td>
    </tr>
  ),
};

const logs = [
  {
    id: "1",
    origin: "Trophy Hunter",
    createdAt: "2020-09-02T11:50:29.679Z",
    level: "error",
    message: "Server crashed",
  },
  {
    id: "2",
    origin: "Trophy Hunter",
    createdAt: "2020-09-03T11:50:29.679Z",
    level: "warning",
    message: "High Memory usage",
  },
  {
    id: "3",
    origin: "Server 2",
    createdAt: "2020-09-02T12:50:29.679Z",
    level: "info",
    message: "Server crashed",
  },
  {
    origin: "neuefische.de",
    createdAt: "2020-09-02T11:50:29.679Z",
    level: "error",
    message: "Server crashed",
    id: "SvG7lzQ",
  },
];
export const Full = Template.bind({});
Full.args = {
  children: logs.map((log) => <LogsTableRow key={log.id} log={log} />),
};
