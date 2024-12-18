import { TableHeaderProps } from "@/types";

  export function TableHeader<T>({ columns }: TableHeaderProps<T>) {
    return (
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column) => (
            <th key={String(column.key)} className="border p-2">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

