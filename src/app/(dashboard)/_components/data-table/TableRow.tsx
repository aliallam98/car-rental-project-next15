import { TableRowProps } from "@/types";
import { TableCell } from "./TableCell";

  
  export function TableRow<T extends { id: number | string }>({
    row,
    columns,
  }: TableRowProps<T>) {
    return (
      <tr key={row.id}>
        {columns.map((column) => (
          <TableCell
            key={String(column.key)}
            value={row[column.key]}
            render={column.render}
          />
        ))}
      </tr>
    );
  }
  