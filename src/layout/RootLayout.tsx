import SideBar from "@/components/ui/SideBar";
import SideBarItem from "@/components/ui/SideBarItem";
import { LayoutDashboard, Users, LayoutList } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/ui/ModeToggle";

const RootLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };
  return (
    <div className="flex">
      <div className="absolute right-4 bottom-4">
        <ModeToggle />
      </div>
      <SideBar>
        <SideBarItem
          text="Dashboard"
          icon={<LayoutDashboard />}
          active={activeItem === "Dashboard"}
          handleItemClick={handleItemClick}
        />
        <SideBarItem
          text="Users"
          icon={<Users />}
          active={activeItem === "Users"}
          handleItemClick={handleItemClick}
        />
        <SideBarItem
          text="Bids"
          icon={<LayoutList />}
          active={activeItem === "Bids"}
          handleItemClick={handleItemClick}
        />
      </SideBar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
