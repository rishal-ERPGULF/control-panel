import SideBar from "@/components/ui/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div >
      <div className=""></div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
