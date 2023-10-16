import { ChevronFirst, ChevronLast, LogOut } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./alert-dialog";
import { selectSideBar, toggleSidebar } from "@/redux/slices/SidebarSlice";
import { useState } from "react";
import { toast } from "./use-toast";
import { useNavigate } from "react-router-dom";
import { setAdminSignOut, selectAdminDetails } from "@/redux/slices/AdminSlice";
interface Props {
  children: React.ReactNode;
}

const SideBar = ({ children }: Props) => {
  const navigate = useNavigate();
  const isOpen = useSelector(selectSideBar);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const dispatch = useDispatch();
  const adminDetails = useSelector(selectAdminDetails);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-4 flex justify-between items-center">
          <img
            src={logo}
            alt="LOGO"
            className={`overflow-hidden transition-all ${
              isOpen ? "w-32" : "w-0"
            }`}
          />
          <Button
            className="dark:hover:bg-gray-900"
            variant={"ghost"}
            size={"icon"}
            onClick={() => dispatch(toggleSidebar())}
          >
            {isOpen ? <ChevronFirst /> : <ChevronLast />}
          </Button>
        </div>
        {/* sidebar items */}
        <ul className="flex-1 px-3">{children}</ul>
        {/* sidebar avatar */}
        <div className="border-t flex p-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ADM</AvatarFallback>
          </Avatar>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              isOpen ? "w-40 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4 flex flex-col justify-center">
              <span className="font-semibold">{adminDetails.name}</span>
              <span className="text-xs text-gray-600">Admin@admin</span>
            </div>
          </div>
          {isOpen && (
            <Button
              className="dark:hover:bg-gray-900"
              size={"icon"}
              variant={"outline"}
              onClick={() => setShowLogoutDialog(true)}
            >
              <LogOut size={18} className="text-red-500" />
            </Button>
          )}
        </div>
      </nav>
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure want to Logout?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will log you out.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={() => {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                dispatch(setAdminSignOut());
                navigate("/login");
                setShowLogoutDialog(false);
                toast({
                  description: "Logged out successfully.",
                });
              }}
            >
              Logout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </aside>
  );
};

export default SideBar;
