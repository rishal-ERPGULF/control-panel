"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { enableDisableUser } from "@/ApiManager/AdminControl";
import { useNavigate } from "react-router-dom";
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
    header: "User's Bids",
    cell: ({ row }) => {
      const navigate = useNavigate();
      return (
        <div className="flex items-center">
          <Button
            variant="default"
            className="bg-white hover:bg-blue-200 dark:hover:bg-blue-200 dark:bg-gray-800"
            onClick={() => {
              navigate(`/users/bids/${row.getValue("id")}`);
            }}
          >
            <span className="text-blue-500 font-semibold">show bids</span>
          </Button>
        </div>
      );
    },
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
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const navigate = useNavigate();
      interface enableDisableUser {
        id: string;
        value: "true" | "false";
      }
      const { mutateAsync } = useMutation({
        mutationFn: ({ id, value }: enableDisableUser) =>
          enableDisableUser(id, value),
        onSuccess: () => {
          queryClient.invalidateQueries(["users"]);
        },
      });
      return (
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="default"
            className="bg-white hover:bg-blue-200 dark:hover:bg-blue-200 dark:bg-gray-800"
            onClick={() => {
              navigate(`/users/edit/${row.getValue("id")}`);
            }}
          >
            <span className="text-blue-500 font-semibold">Edit</span>
          </Button>
          {row.getValue("is_black_listed") === false ? (
            <Button
              variant="default"
              className="bg-white dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-300 text-red-500 font-semibold"
              onClick={async () => {
                await mutateAsync({ id: row.getValue("id"), value: "true" });
              }}
            >
              Disable
            </Button>
          ) : (
            <Button
              variant="default"
              className="bg-white dark:bg-gray-800 hover:bg-green-300  dark:hover:bg-green-300 text-green-500 font-semibold"
              onClick={async () => {
                await mutateAsync({ id: row.getValue("id"), value: "false" });
              }}
            >
              Enable
            </Button>
          )}
        </div>
      );
    },
  },
];
