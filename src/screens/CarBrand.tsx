import { getAllCarBrand } from "@/ApiManager/AdminControl";
import { DataTable } from "@/components/ui/DataTable";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { brandColoums } from "@/components/ui/brand-columns";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CarBrand = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllCarBrand,
  });
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b justify-between py-4">
        <span className="text-2xl text-gray-800 dark:text-white ml-10 font-medium">
          Car Brands
        </span>
        <div className="mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-scroll scrollbar-hide">
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
                New brand
              </Button>
            </div>
            <DataTable columns={brandColoums} data={data} searchColumn="name" />
          </div>
        ) : (
          <span className="text-lg text-gray-800 dark:text-white">
            Failed to get brand data.
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

export default CarBrand;
