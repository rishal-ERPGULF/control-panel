"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "display_name",
    header: "Display Name",
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
  },
  {
    accessorKey: "registered_on",
    header: "Registered On",
  },
];
