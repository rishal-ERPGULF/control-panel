"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";
import { Edit, Trash2 } from "lucide-react";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  display_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  qid_no: string;
  wallet_amount: string;
  is_black_listed: "false" | "true";
  registered_on: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "qid_no",
    header: "QID No",
  },
  {
    accessorKey: "wallet_amount",
    header: "Wallet Amount",
  },
  {
    accessorKey: "is_black_listed",
    header: "Black Listed",
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.getValue("is_black_listed") === true ? (
          <div className="bg-red-300 px-3 rounded-md text-sm text-red-800 font-semibold py-0.5">
            true
          </div>
        ) : (
          <div className="bg-green-300 px-3 rounded-md text-sm text-green-800 font-semibold py-0.5">
            false
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "registered_on",
    header: "Registered On",
    cell: ({ row }) => {
      const date = new Date(row.getValue("registered_on"));
      return (
        <div className="flex items-center">{date.toLocaleDateString()}</div>
      );
    },
  },
  {
    id: "actions",
    header: () => (
      <div className="flex justify-center items-center">Actions</div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-center items-center space-x-2">
        <Button
          variant="default"
          className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
          onClick={() => {
            console.log(row.getValue("id"));
          }}
        >
          <Edit size={24} className="text-gray-400 dark:text-gray-200" />
        </Button>
        <Button
          variant="default"
          className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900"
          onClick={() => {
            console.log(row.getValue("id"));
          }}
        >
          <Trash2 size={24} className="text-gray-400 dark:text-gray-200" />
        </Button>
      </div>
    ),
  },
];
