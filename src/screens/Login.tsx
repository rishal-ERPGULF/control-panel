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

const Login = () => {
  return (
    <div className="h-screen grid place-items-center bg-gradient-to-tl from-gray-50 to-gray-300">
      <Card className="md:w-96 py-10 shadow-md bg-white/10 bg-blur rounded-xl border-white border-2">
        <CardHeader className="text-center">
          <CardTitle>Dallah Mzad</CardTitle>
          <CardDescription>Admin login</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-1">
            <span className="text-md text-gray-800">email</span>
            <Input type="text" name="Email" placeholder="enter your email..." />
          </div>
          <div className="grid gap-1">
            <span className="text-md text-gray-800">password</span>
            <Input
              type="text"
              name="Email"
              placeholder="enter your password..."
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-gray-800 text-white font-semibold text-lg"
            variant={"outline"}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
