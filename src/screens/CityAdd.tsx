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
import { Label } from "@radix-ui/react-dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CityAdd = () => {
  const navigate = useNavigate();
  interface Inputs {
    name: string;
    name_in_arabic: string;
  }
  const { isLoading, mutateAsync } = useMutation({
    mutationFn: ({ name, name_in_arabic }: Inputs) =>
      addCity(name, name_in_arabic),
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
        
    } catch (error) {
        
    }
  }
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b py-4">
        <Button variant={"link"} onClick={() => navigate("/users")}>
          <ChevronLeft size={30} />
        </Button>
        <span className="text-2xl text-gray-800 dark:text-white font-medium">
          Register new user
        </span>
        <div className="ml-auto mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex-1 bg-gray-100 dark:bg-gray-900">
        <Card className="bg-transparent border-0 shadow-none ml-4 w-fit">
          <CardHeader>
            <CardTitle className="mb-4">
              <span className="text-xl text-gray-800 dark:text-white font-medium text-left underline underline-offset-4 cursor-default">
                Add new user.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-col space-y-4">
            <div className="flex-auto w-full space-y-2">
              <Label
                htmlFor="name"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                {...register("name", {
                  required: "name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Please provide a valid name.",
                  },
                })}
                type="text"
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
                ADD USER
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CityAdd;
