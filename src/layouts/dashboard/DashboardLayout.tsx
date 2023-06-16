import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Navbar from "./nav";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex ">
      <div>
        <Navbar open={open} setOpen={setOpen} />
      </div>
      <div className="flex-1">
        <Header setIsOpen={setOpen} />
        <main className="p-5 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
