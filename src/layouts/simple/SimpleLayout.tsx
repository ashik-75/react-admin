import { Outlet } from "react-router-dom";

function SimpleLayout() {
  return (
    <div>
      <div>Nav</div>
      <Outlet />
    </div>
  );
}

export default SimpleLayout;
