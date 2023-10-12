import SideBar from "@/components/ui/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar>
        <p>hi</p>
      </SideBar>
      <Outlet />
    </div>
  );
};

export default RootLayout;
