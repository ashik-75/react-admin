import { Outlet } from "react-router-dom";

function SimpleLayout() {
  return (
    <div>
      <div className="border-b border-zinc-100 px-5 py-5 sm:px-10">
        <img src="/slack.png" className="h-10 w-10" alt="" />
      </div>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default SimpleLayout;
