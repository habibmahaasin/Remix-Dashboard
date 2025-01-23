import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<T> {
  columns: {
    accessorKey: string;
    header: string;
    cell?: ({ row }: { row: { original: T } }) => React.ReactNode;
  }[];
  data: T[];
  caption?: string;
}

export function DataTable<T>({ columns, data, caption }: DataTableProps<T>) {
  return (
    <Table className="min-w-full border">
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column.accessorKey}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index} className="hover:bg-gray-100">
            {columns.map((column) => (
              <TableCell key={column.accessorKey}>
                {column.cell
                  ? column.cell({ row: { original: item } })
                  : (item as any)[column.accessorKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
