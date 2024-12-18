import { ReactNode } from "react";

export type Column<T> = {
    key: keyof T;
    header: string;
    render?: (value: T[keyof T]) => ReactNode;
  };

export type DataTableProps<T> = {
    data: T[];
    columns: Column<T>[];
  };

export   type TableCellProps<T> = {
    value: T;
    render?: (value: T) => ReactNode;
  };

export   type TableRowProps<T> = {
    row: T;
    columns: Column<T>[];
  };

export type TableHeaderProps<T> = {
    columns: Column<T>[];
  };
  