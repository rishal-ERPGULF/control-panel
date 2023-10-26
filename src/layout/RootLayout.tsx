import SideBar from "@/components/ui/SideBar";
import SideBarItem from "@/components/ui/SideBarItem";
import { LayoutDashboard, Users, Blocks, Building2, Car } from "lucide-react";
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
          path="/city"
          text="City"
          icon={<Building2 />}
          active={currentPath === "/city"}
        />
        <SideBarItem
          path="/features"
          text="Features"
          icon={<Blocks />}
          active={currentPath === "/features"}
        />
        <SideBarItem
          path="/carmodels"
          text="Car-Models"
          icon={<Car />}
          active={currentPath === "/carmodels"}
        />
      </SideBar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
