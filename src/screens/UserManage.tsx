import { fetchAllUsers } from "@/ApiManager/AdminControl";
import { columns } from "@/components/ui/Colums";
import { DataTable } from "@/components/ui/DataTable";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Heading1, Loader } from "lucide-react";

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
      <div className="flex flex-1 justify-center items-center bg-gray-200 dark:bg-gray-950">
        <div className="">
          {isLoading ? (
            <Loader size={56} className="animate-spin" />
          ) : data ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <>
              <span className="text-lg text-gray-800 dark:text-white">
                Failed to get users data.
              </span>
              <Button
                onClick={() => refetch()}
                variant={"link"}
                className="text-lg font-medium text-blue-500"
              >
                Try again!
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManage;
