import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "~/ui/elements/button";
import { Checkbox } from "~/ui/elements/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/ui/elements/dropdown-menu";
import { AppLayout } from "~/ui/layouts/app-layout";
import { DataTable } from "~/ui/elements/data-table";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/loaders/postLoader";
import { IPost } from "~/services/jsonplaceholder/types";
export { loader };

const columns: ColumnDef<IPost>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        User ID
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("userId") as string}</div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("title") as string}</div>
    ),
  },
  {
    id: "actions",
    header: () => <span>Actions</span>,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Show Detail</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <DataTable
          data={posts}
          columns={columns}
          filterPlaceholder="Filter Title..."
          searchParameter="title"
        />
      </div>
    </AppLayout>
  );
}
