"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";

export type city = {
  id: string;
  name: string;
  name_localized: string;
};

export const cityColumns: ColumnDef<city>[] = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Name Localized",
    accessorKey: "name_localized",
  },
  {
    id: "actions",
    header: () => (
      <div className="flex justify-center items-center">Actions</div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center items-center space-x-2">
        <Button
          className="bg-white hover:bg-blue-200 dark:hover:bg-blue-200 dark:bg-gray-800"
          onClick={() => {
            console.log(row);
          }}
        >
          <span className="text-blue-500 font-semibold">Edit</span>
        </Button>
        <Button
          className="bg-white dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-300 text-red-500 font-semibold"
          onClick={() => {
            console.log(row);
          }}
        >
          Delete
        </Button>
      </div>
    ),
  },
];
