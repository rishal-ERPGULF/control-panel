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

const UserEdit = () => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b justify-between py-4">
        <span className="text-2xl text-gray-800 dark:text-white ml-10 font-medium">
          Edit user information
        </span>
        <div className="mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex-1 bg-gray-100 dark:bg-gray-900">
        <Card className="bg-transparent border-0 shadow-none ml-4 w-fit">
          <CardHeader>
            <CardTitle className="mb-4">
              <span className="text-xl text-gray-800 dark:text-white font-medium text-left underline underline-offset-4 cursor-default">
                Edit user info.
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
                <Input type="text" />
              </div>
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Lastname"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  lastname
                </Label>
                <Input type="text" />
              </div>
            </div>
            <div className="flex-auto w-full space-y-2">
              <Label
                htmlFor="Email"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Email
              </Label>
              <Input type="text" />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Phone"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Phone
                </Label>
                <Input type="text" />
              </div>
              <div className="flex-auto w-64 space-y-2">
                <Label
                  htmlFor="Qid"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  Qid
                </Label>
                <Input type="text" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <Button
              className="w-full font-semibold bg-gray-950 hover:bg-gray-300 text-white dark:text-gray-900 dark:bg-gray-300 dark:hover:bg-gray-950 dark:hover:text-white"
              variant={"outline"}
            >
              ADD USER
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default UserEdit;
