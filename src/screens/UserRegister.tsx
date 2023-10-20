import { NewUserRegister } from "@/ApiManager/AdminControl";
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
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  interface Inputs {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    qid?: string;
    password: string;
    confirmPassword: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      qid: "",
      password: "",
      confirmPassword: "",
    },
  });
  interface InputsMn {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    qid?: string;
    password: string;
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (data: InputsMn) => NewUserRegister(data),
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
      });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      await mutateAsync({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        qid: data.qid,
        password: data.password,
      })
        .then(() => {
          toast({
            variant: "default",
            title: "User added successfully.",
            description: "User has been added successfully.",
          });
          navigate("/users");
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with adding new user.",
          });
        });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with adding new user.",
      });
    }
  };
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
      <div className="flex-1 bg-gray-200 dark:bg-gray-900">
        <Card className="bg-transparent border-0 shadow-none ml-4 w-fit">
          <CardHeader>
            <CardTitle className="mb-4">
              <span className="text-xl text-gray-800 dark:text-white font-medium text-left underline underline-offset-4 cursor-default">
                Add new user.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-col space-y-4">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Firstname"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  First name
                </Label>
                <Input
                  {...register("first_name", {
                    required: "Please provide fisrt name of user.",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Please provide a valid first name.",
                    },
                  })}
                  type="text"
                />
                {errors.first_name && (
                  <span className="text-red-500 text-sm my-1">
                    {errors.first_name.message}
                  </span>
                )}
              </div>
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Lastname"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  lastname
                </Label>
                <Input
                  {...register("last_name", {
                    required: "Please provide last name of user",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Please provide a valid last name.",
                    },
                  })}
                  type="text"
                />
                {errors.last_name && (
                  <span className="text-red-500 text-sm my-1">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex-auto w-full space-y-2">
              <Label
                htmlFor="Email"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="text"
              />
              {errors.email && (
                <span className="text-red-500 text-sm my-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Phone"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Phone
                </Label>
                <Input
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "Please provide a valid phone number.",
                    },
                  })}
                  type="text"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm my-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Qid"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Qid
                </Label>
                <Input {...register("qid")} type="text" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Password"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Password
                </Label>
                <Input
                  {...register("password", {
                    required: "Password required",
                    pattern: {
                      value: /^[A-Za-z0-9]+$/i,
                      message: "Please provide a valid password.",
                    },
                    min: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                  })}
                  type="text"
                />
                {errors.password && (
                  <span className="text-red-500 text-sm my-1">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="ConfirmPassword"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Confirm password
                </Label>
                <Input
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  type="text"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm my-1">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
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

export default UserRegister;
