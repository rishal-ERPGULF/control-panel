import { addCity } from "@/ApiManager/AdminControl";
import { ButtonLoading } from "@/components/ui/ButtonLoading";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CityAdd = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useToast();
  interface Inputs {
    name: string;
    name_in_arabic: string;
  }
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: ({ name, name_in_arabic }: Inputs) =>
      addCity(name, name_in_arabic),
    onError: () => {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to add new city.",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["city"]);
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      name_in_arabic: "",
    },
  });
  const onSubmit = async (data: Inputs) => {
    try {
      await mutateAsync(data);
      toast({
        variant: "default",
        title: "City added successfully.",
      });
      navigate("/city");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "Failed to add new city.",
      });
    }
  };
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b py-4">
        <Button variant={"link"} onClick={() => navigate("/city")}>
          <ChevronLeft size={30} />
        </Button>
        <span className="text-2xl text-gray-800 dark:text-white font-medium">
          Add new city
        </span>
        <div className="ml-auto mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex-1 bg-gray-200 dark:bg-gray-900">
        <Card className="bg-transparent border-0 shadow-none ml-4 w-fit">
          <CardHeader>
            <CardTitle className="mb-1">
              <span className="text-xl text-gray-800 dark:text-white font-medium text-left underline underline-offset-4 cursor-default">
                Add new city.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-col space-y-4">
            <div className="flex-auto w-80 space-y-2">
              <Label className="text-sm text-gray-600 dark:text-gray-300">
                Name
              </Label>
              <Input
                {...register("name", {
                  required: "name is required",
                })}
                type="text"
              />
              {errors.name && (
                <span className="text-red-500 text-sm my-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="flex-auto w-80 space-y-2">
              <Label className="text-sm text-gray-600 dark:text-gray-300 ">
                Name in Arabic
              </Label>
              <Input
                {...register("name_in_arabic", {
                  required: "arabic name is required",
                })}
                lang="ar"
                type="text"
                dir="rtl"
              />
              {errors.name && (
                <span className="text-red-500 text-sm my-1">
                  {errors.name.message}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            {isLoading ? (
              <ButtonLoading />
            ) : (
              <Button
                onClick={handleSubmit(onSubmit)}
                className="w-full font-semibold bg-gray-950 hover:bg-gray-300 text-white dark:text-gray-900 dark:bg-gray-300 dark:hover:bg-gray-950 dark:hover:text-white"
                variant={"outline"}
              >
                ADD NEW CITY
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CityAdd;
