import { fetchAllUsers } from "@/ApiManager/AdminControl";
import { columns } from "@/components/ui/Colums";
import { DataTable } from "@/components/ui/DataTable";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const UserManage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchAllUsers,
  });
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="h-16 w-full flex items-center border-b justify-between">
        <span className="text-2xl text-gray-800 dark:text-white ml-10 font-medium">
          User Management
        </span>
        <div className="mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex flex-1 bg-gray-200 dark:bg-gray-950">
        {isLoading ? (
          <div className="absolute left-1/2 top-1/3">
            <Loader2 size={64} className="animate-spin" />
          </div>
        ) : data ? (
          <div className="hidden h-full flex-1 flex-col space-y-4 p-5 md:flex">
            <div className="flex justify-end">
              <Button
                variant={"default"}
                className="font-semibold"
              >
                New User
              </Button>
            </div>
            <DataTable columns={columns} data={data} />
          </div>
        ) : (
          <span className="text-lg text-gray-800 dark:text-white">
            Failed to get users data.
            <Button
              onClick={() => refetch()}
              variant={"link"}
              className="text-lg font-medium text-blue-500 p-0"
            >
              Try again!
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};

export default UserManage;
