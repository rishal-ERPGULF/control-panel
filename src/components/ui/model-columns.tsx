"use client";

import { ColumnDef } from "@tanstack/react-table";

export type model = {
  id: string;
  name: string;
  name_localized: string;
};

export const modelColumns: ColumnDef<model>[] = [
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
  
];
