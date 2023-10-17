import { ModeToggle } from "@/components/ui/ModeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const UserRegister = () => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <nav className="w-full flex items-center border-b justify-between py-4">
        <span className="text-2xl text-gray-800 dark:text-white ml-10 font-medium">
          Register new user
        </span>
        <div className="mr-6">
          <ModeToggle />
        </div>
      </nav>
      <div className="flex flex-1 bg-gray-100 dark:bg-gray-950 p-1 ">
        <Card className="w-9/12">
          <CardHeader>
            <CardTitle>
              <span className="text-2xl text-gray-800 dark:text-white font-medium text-left">
                Add new user
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <div className="flex-auto w-60">
              <label htmlFor="Firstname">name</label>
              <Input type="text" />
            </div>
            <div className="flex-auto w-60">
              <label htmlFor="Firstname">name</label>
              <Input type="text" />
            </div>
            <div className="flex-auto">
              <label htmlFor="Firstname">name</label>
              <Input type="text" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserRegister;
