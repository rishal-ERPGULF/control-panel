import { selectSideBar } from "@/redux/slices/SidebarSlice";
import { useSelector } from "react-redux";
interface Props {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  handleItemClick: (text: string) => void;
}

const SideBarItem = ({ icon, text, active, handleItemClick }: Props) => {
  const isOpen = useSelector(selectSideBar);
  return (
    <li
      onClick={() => handleItemClick(text)}
      className={`relative flex justify-center items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-gray-200 to-gray-100 text-gray-800"
          : "hover:bg-gray-50 text-gray-600"
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
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-gray-100 text-gray-800 text-sm
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
