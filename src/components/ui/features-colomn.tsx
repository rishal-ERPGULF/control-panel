"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFeature } from "@/ApiManager/AdminControl";
import { useToast } from "./use-toast";
import { Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFeatureDetails } from "@/redux/slices/FeaturesSlice";

export type features = {
  id: string;
  name: string;
  name_localized: string;
};

export const featuresColumn: ColumnDef<features>[] = [
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
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const { toast } = useToast();
      type id = string;
      const { mutateAsync, isLoading } = useMutation({
        mutationFn: (id: id) => deleteFeature(id),
        onError: () => {
          toast({
            variant: "destructive",
            title: "Oh no! Something went wrong.",
            description: "Failed to delete feature.",
          });
        },
        onSuccess: () => {
          queryClient.invalidateQueries(["features"]);
          toast({
            variant: "default",
            title: "Success!",
            description: "feature deleted successfully.",
          });
        },
      });
      return (
        <div className="flex justify-center items-center space-x-2">
          <Button
            className="bg-white hover:bg-blue-200 dark:hover:bg-blue-200 dark:bg-gray-800"
            onClick={() => {
              dispatch(
                addFeatureDetails({
                  id: row.getValue("id"),
                  name: row.getValue("name"),
                  name_in_arabic: row.getValue("name_localized"),
                })
              );
              navigate(`edit/${row.getValue("id")}`);
            }}
          >
            <span className="text-blue-500 font-semibold">Edit</span>
          </Button>
          <Button
            className="bg-white dark:bg-gray-800 hover:bg-red-300 dark:hover:bg-red-300 text-red-500 font-semibold"
            onClick={() => {
              mutateAsync(row.getValue("id"));
            }}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Delete"}
          </Button>
        </div>
      );
    },
  },
];
