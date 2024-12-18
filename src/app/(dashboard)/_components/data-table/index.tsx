import { DataTableProps } from "@/types";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export default function DataTable<T extends { id: number | string }>({
  data,
  columns,
}: DataTableProps<T>) {
  return (
    <table className="min-w-full border-collapse border border-gray-200 overflow-x-auto">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} row={row} columns={columns} />
        ))}
      </tbody>
    </table>
  );
}
