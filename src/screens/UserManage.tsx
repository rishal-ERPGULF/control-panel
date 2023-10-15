import { fetchAllUsers } from "@/ApiManager/AdminControl";
import { columns } from "@/components/ui/Colums";
import { DataTable } from "@/components/ui/DataTable";
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
      <nav className="h-16 w-full flex items-center border-b ">
        <span className="text-2xl text-gray-800 dark:text-white ml-10 font-normal">
          User Management
        </span>
      </nav>
      <div className="flex flex-1 bg-gray-200 dark:bg-gray-950 ">
        {isLoading ? (
          <Loader2 size={64} className="animate-spin" />
        ) : data ? (
          <div className="hidden h-full flex-1 flex-col space-y-8 p-5 md:flex">
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
