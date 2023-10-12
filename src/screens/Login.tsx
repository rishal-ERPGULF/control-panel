import { AdminLogin } from "@/ApiManager/AdminControl";
import { ButtonLoading } from "@/components/ui/ButtonLoading";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  interface Inputs {
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      await AdminLogin(data)
        .then(() => {
          toast({
            variant: "default",
            title: "Success",
            description: "You have successfully logged in.",
          });
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Login went wrong.",
            description:
              "There was a problem with your login attempt.Try again.",
          });
        }); // Use await to handle the promise directly
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your login attempt.",
      });
    } finally {
      setIsLoading(false); // Ensure that this code is always executed
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="absolute right-4 bottom-4">
        <ModeToggle />
      </div>
      <Card className="md:w-96 py-10 shadow-gray-600 shadow-md bg-white/10 bg-blur rounded-xl border-white border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Dallah Mzad</CardTitle>
          <CardDescription>Admin login</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-1">
            <span className="text-md text-gray-800">email</span>
            <Input
              id="email"
              {...register("email", {
                required: "email required.",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Entered value does not match email format",
                },
              })}
              placeholder="enter your email..."
            />
            {errors.email && (
              <span className="text-red-500 text-sm my-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="grid gap-1">
            <span className="text-md text-gray-800">password</span>
            <Input
              id="password"
              {...register("password", {
                required: "password required.",
                minLength: {
                  value: 5,
                  message: "password must be at least 5 characters.",
                },
              })}
              placeholder="enter your password..."
            />
            {errors.password && (
              <span className="text-red-500 text-sm my-1">
                {errors.password.message}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter>
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <Button
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-gray-800 text-white font-semibold text-lg"
              variant={"outline"}
            >
              Login
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
