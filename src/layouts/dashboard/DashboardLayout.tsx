import { Outlet } from "react-router-dom";

import { cn } from "../../utils/cn";
import Header from "./header";
import Navbar from "./nav";

function DashboardLayout() {
  return (
    <div className={cn("flex")}>
      <div>
        <Navbar />
      </div>
      <div className="flex-1">
        <Header />
        <main className="p-5 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
