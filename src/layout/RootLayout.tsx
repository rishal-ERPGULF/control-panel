import SideBar from "@/components/ui/SideBar";
import SideBarItem from "@/components/ui/SideBarItem";
import { LayoutDashboard, Users, LayoutList } from "lucide-react";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const currentPath = useLocation().pathname;
  return (
    <div className="flex">
      <SideBar>
        <SideBarItem
          path="/"
          text="Dashboard"
          icon={<LayoutDashboard />}
          active={currentPath === "/"}
        />
        <SideBarItem
          path="/users"
          text="Users"
          icon={<Users />}
          active={currentPath === "/users"}
        />
        <SideBarItem
          path="/bids"
          text="Bids"
          icon={<LayoutList />}
          active={currentPath === "/bids"}
        />
      </SideBar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
