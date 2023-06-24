import { DesktopMenu } from "./DesktopMenu";

function Navbar() {
  return (
    <div className="sticky left-0 top-0 hidden h-screen w-[280px] border-r border-dashed bg-white dark:bg-slate-950 xl:block">
      <DesktopMenu />
    </div>
  );
}

export default Navbar;
