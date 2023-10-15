import { selectSideBar } from "@/redux/slices/SidebarSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
interface Props {
  path: string;
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const SideBarItem = ({ path, icon, text, active }: Props) => {
  const isOpen = useSelector(selectSideBar);
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(path);
      }}
      className={`relative flex justify-center items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-gray-200 to-gray-100 text-gray-800 dark:bg-gradient-to-tr dark:from-gray-900 dark:to-gray-900 dark:text-white"
          : "hover:bg-gray-50 text-gray-600 dark:hover:bg-gray-900 dark:text-gray-300"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!isOpen && (
        <div
          className={`
          z-50
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white/70 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    `}
        >
          {text}
        </div>
      )}
    </li>
  );
};

export default SideBarItem;
