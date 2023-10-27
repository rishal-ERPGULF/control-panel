import { getAllCarModels } from "@/ApiManager/AdminControl";
import { DataTable } from "@/components/ui/DataTable";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { modelColumns } from "@/components/ui/model-columns";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const CarModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["bids", id || ""], // Use an empty string as a fallback if id is undefined
    queryFn: () => getAllCarModels(id || ""), // Use an empty string as a fallback if id is undefined
  });
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b py-4">
        <Button variant={"link"} onClick={() => navigate("/carmodels")}>
          <ChevronLeft size={30} />
        </Button>
        <span className="text-2xl text-gray-800 dark:text-white font-medium">
          Car Models
        </span>
        <div className="ml-auto mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-scroll scrollbar-hide">
        <div className="hidden h-full flex-1 flex-grow flex-col space-y-4 p-5 md:flex">
          {isLoading ? (
            <div className="absolute left-1/2 top-1/3">
              <Loader2 size={64} className="animate-spin" />
            </div>
          ) : data ? (
            <div className="hidden h-full flex-1 flex-grow flex-col space-y-4 p-5 md:flex">
              <div className="flex justify-end">
                <Button
                  onClick={() => navigate("new")}
                  className="font-semibold dark:bg-gray-950 dark:hover:bg-gray-800 dark:text-white bg-white hover:bg-gray-200 text-gray-800"
                >
                  New Model
                </Button>
              </div>
              <DataTable
                columns={modelColumns}
                data={data}
                searchColumn="name"
              />
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
    </div>
  );
};

export default CarModel;
