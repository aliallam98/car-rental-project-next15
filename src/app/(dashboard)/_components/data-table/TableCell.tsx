import { TableCellProps } from "@/types";


export function TableCell<T>({ value, render }: TableCellProps<T>) {
  return (
    <td className="border p-2">{render ? render(value) : String(value)}</td>
  );
}
