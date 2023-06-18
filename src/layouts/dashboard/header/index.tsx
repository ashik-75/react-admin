import { MenuIcon } from "lucide-react";
import Account from "./Account";
import LanguageGroup from "./LanguageGroup";
import Notification from "./Notification";
import SearchBar from "./SearchBar";

function Header({ setIsOpen }: { setIsOpen: (value: boolean) => void }) {
  return (
    <div
      className={`sticky right-0 top-0 flex h-[64px]  w-full items-center justify-between border-b border-dashed bg-white/40 px-5 backdrop-blur-xl sm:h-[94px] sm:px-10`}
    >
      <div className="flex">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-3 hover:bg-zinc-50 xl:hidden"
        >
          <MenuIcon className="icon" />
        </button>

        <SearchBar />
      </div>

      <div className="flex items-center space-x-4">
        <LanguageGroup />
        <Notification />
        <Account />
      </div>
    </div>
  );
}

export default Header;
