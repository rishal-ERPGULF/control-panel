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
      className={`flex justify-center items-center py-2 my-1 font-medium rounded-md cursor-pointer transition-colors ${
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
    </li>
  );
};

export default SideBarItem;
