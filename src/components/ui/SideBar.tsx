import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const SideBar = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(true as boolean);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-4 flex justify-between items-center">
          <img
            src={logo}
            alt="LOGO"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t flex p-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ADM</AvatarFallback>
          </Avatar>
          <div
            className={`flex justify-between items-center overflow-hidden ${
              expanded ? "w-40 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Admin</h4>
              <span className="text-xs text-gray-600">Admin@admin</span>
            </div>
          </div>
          {expanded && (
            <Button size={"icon"} variant={"outline"}>
              <LogOut className="text-red-600" />
            </Button>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
