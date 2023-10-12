import SideBar from "@/components/ui/SideBar";
import SideBarItem from "@/components/ui/SideBarItem";
import { LayoutDashboard,Users } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };
  return (
    <div className="flex">
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
      </SideBar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
