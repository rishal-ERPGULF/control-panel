import { ChevronFirst, LogOut } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface Props {
  children: React.ReactNode;
}

const SideBar = ({ children }: Props) => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-4 flex justify-between items-center">
          <img src={logo} alt="LOGO" className="w-32" />
          <Button variant={"ghost"}>
            <ChevronFirst />
          </Button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ADM</AvatarFallback>
          </Avatar>
          <div className="flex justify-between items-center overflow-hidden w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">Admin</h4>
              <span className="text-xs text-gray-600">Admin@admin</span>
            </div>
            <Button variant={"outline"}>
              <LogOut size={20} className="text-red-600" />
            </Button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
