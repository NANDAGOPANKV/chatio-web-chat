import SearchBar from "../search/SearchBar";
import SignOut from "../../pages/auth/SignOut";
import Conversations from "../conversation/Conversations";

const SideBar = () => {
  return (
    <div className="rounded-l-full">
      <SearchBar />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="divider px-3"></div>
      <SignOut />
    </div>
  );
};

export default SideBar;
