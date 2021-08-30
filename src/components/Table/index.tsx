import React, { FC } from "react";
import "./styles.css";

import { MdDone, MdClose } from "react-icons/md";

interface TableProps {
  data: Array<props>;
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
          <th>Optional</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.type}</td>
            <td>{row.defaultValue}</td>
            <td>{row.description}</td>
            <td>{row.optional ? <MdDone /> : <MdClose />}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
